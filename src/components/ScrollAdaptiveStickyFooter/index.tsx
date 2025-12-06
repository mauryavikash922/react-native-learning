import React, { useCallback, useRef } from 'react';
import {
  Image,
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles from './styles';
import { data, product, SectionKey } from './constants';
import { useWindowDimensions } from 'react-native';

const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`;

const formatCount = (value: number) => {
  if (value >= 1000) {
    const formatted = (value / 1000).toFixed(1);
    return `${formatted.endsWith('0') ? formatted.slice(0, -2) : formatted}K`;
  }
  return `${value}`;
};

function ScrollAdaptiveStickyFooter() {
  const { height: screenHeight } = useWindowDimensions();
  const countRef = useRef(0);
  const heightRef = useRef(Array(data.length).fill(0));
  const stickyFooterIndex = data.indexOf('addToCart');
  const isSticky = useSharedValue(1);
  const footerY = useSharedValue(0);
  const footerHeight = useSharedValue(0);

  const renderAdaptiveStickyFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerPriceGroup}>
          <Text style={styles.footerPriceLabel}>Total</Text>
          <View style={styles.footerPriceRow}>
            <Text style={styles.footerPrice}>{formatPrice(product.price)}</Text>
            <Text style={styles.footerDiscount}>
              {`${product.discountPercentage}% OFF`}
            </Text>
          </View>
          <Text style={styles.footerHint}>{`Best price ${formatPrice(
            product.bestPrice,
          )} ${product.bestPriceInfo}`}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.85} style={styles.addToBagButton}>
          <Text style={styles.addToBagText}>ADD TO BAG</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderSection = useCallback(({ item }: { item: SectionKey }) => {
    switch (item) {
      case 'productImage':
        return (
          <View style={[styles.section, styles.heroSection]}>
            <Image
              source={{ uri: product.heroImage }}
              style={styles.heroImage}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.thumbnailList}
            >
              {product.gallery.map((uri, index) => (
                <View style={styles.thumbnailWrapper} key={`${uri}-${index}`}>
                  <Image source={{ uri }} style={styles.thumbnail} />
                </View>
              ))}
            </ScrollView>
          </View>
        );
      case 'productDetails':
        return (
          <View style={styles.section}>
            <Text style={styles.brandText}>{product.brand}</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingRow}>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingValue}>{product.rating}</Text>
                <Text style={styles.ratingStar}>★</Text>
              </View>
              <Text style={styles.ratingCount}>
                {`${formatCount(product.ratingCount)} Ratings | ${formatCount(
                  product.reviewCount,
                )} Reviews`}
              </Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>{formatPrice(product.price)}</Text>
              <Text style={styles.mrpText}>MRP {formatPrice(product.mrp)}</Text>
              <Text
                style={styles.discountText}
              >{`${product.discountPercentage}% OFF`}</Text>
            </View>
            <Text style={styles.bestPriceText}>
              Best Price: {formatPrice(product.bestPrice)}
            </Text>
            <Text style={styles.taxText}>
              {`Price ${product.bestPriceInfo}`}
            </Text>
            <View style={styles.couponBadge}>
              <Text style={styles.couponText}>{product.couponInfo}</Text>
            </View>
            <View style={styles.deliveryRow}>
              <Text style={styles.deliveryText}>{product.deliveryText}</Text>
            </View>
          </View>
        );
      case 'offers':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Best Offers</Text>
            {product.offers.map(offer => (
              <View style={styles.offerCard} key={offer.title}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <Text style={styles.offerDescription}>{offer.description}</Text>
              </View>
            ))}
          </View>
        );
      case 'addToCart':
        return renderAdaptiveStickyFooter();
      case 'sizeSelector':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Size</Text>
            <View style={styles.sizeRow}>
              {product.availableSizes.map(size => (
                <View style={styles.sizeChip} key={size}>
                  <Text style={styles.sizeText}>{size}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      case 'highlights':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Highlights</Text>
            <View style={styles.highlightList}>
              {product.highlights.map(highlight => (
                <View style={styles.highlightItem} key={highlight}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.highlightText}>{highlight}</Text>
                </View>
              ))}
            </View>
            <View style={styles.specsList}>
              {product.specifications.map(spec => (
                <Text style={styles.specsText} key={spec}>
                  {spec}
                </Text>
              ))}
            </View>
          </View>
        );
      case 'policies':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Myntra Services</Text>
            {product.promises.map(policy => (
              <View style={styles.policyCard} key={policy.title}>
                <Text style={styles.policyTitle}>{policy.title}</Text>
                <Text style={styles.policyDescription}>
                  {policy.description}
                </Text>
              </View>
            ))}
          </View>
        );
      case 'reviews':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
            <View style={styles.reviewsHeader}>
              <View style={styles.ratingHighlight}>
                <Text style={styles.ratingScore}>{product.rating}</Text>
                <Text style={styles.ratingMeta}>
                  {`${formatCount(product.ratingCount)} verified buyers`}
                </Text>
              </View>
            </View>
            {product.reviews.map(review => (
              <View style={styles.reviewCard} key={review.id}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewRating}>{review.rating}★</Text>
                  <Text style={styles.reviewAuthor}>
                    {`${review.author} · ${review.date}`}
                  </Text>
                </View>
                <Text style={styles.reviewTitle}>{review.title}</Text>
                <Text style={styles.reviewBody}>{review.body}</Text>
              </View>
            ))}
          </View>
        );
      case 'relatedProducts':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Similar Styles</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.relatedScroll}
            >
              {product.relatedProducts.map(related => (
                <View style={styles.relatedCard} key={related.id}>
                  <Image
                    source={{ uri: related.image }}
                    style={styles.relatedImage}
                  />
                  <View style={styles.relatedContent}>
                    <Text style={styles.relatedBrand}>{related.brand}</Text>
                    <Text style={styles.relatedName}>{related.name}</Text>
                    <View style={styles.relatedPriceRow}>
                      <Text style={styles.relatedPrice}>
                        {formatPrice(related.price)}
                      </Text>
                      <Text style={styles.relatedMrp}>
                        {formatPrice(related.mrp)}
                      </Text>
                      <Text style={styles.relatedDiscount}>
                        {related.discountLabel}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        );
      default:
        return null;
    }
  }, []);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const { y } = event.contentOffset;
      const scrollBottom = y + screenHeight;
      if (scrollBottom <= footerY.value) {
        isSticky.value = 1;
      } else {
        isSticky.value = 0;
      }
    },
  });

  const stickyStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: isSticky.value == 1 ? 0 : 1000 }],
      opacity: isSticky.value == 1 ? 1 : 0,
    };
  });
  const onLayoutHandler = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const { height } = event.nativeEvent.layout;
      heightRef.current[index] = height;
      countRef.current++;
      if (countRef.current === data.length) {
        let ySum = 0;
        const sectionYs = [];
        sectionYs.push(0);
        for (let i = 0; i < data.length; i++) {
          ySum += heightRef.current[i];
          sectionYs.push(ySum);
        }
        footerY.value = sectionYs[stickyFooterIndex];
        footerHeight.value = heightRef.current[stickyFooterIndex];
      }
    },
    [],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return (
        <View onLayout={e => onLayoutHandler(e, index)}>
          {renderSection({ item: item as SectionKey })}
        </View>
      );
    },
    [renderSection],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.pageContainer}>
        <Animated.FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          onScroll={onScrollHandler}
          initialNumToRender={data.length}
        />
        <Animated.View style={stickyStyle}>
          {renderAdaptiveStickyFooter()}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

export default ScrollAdaptiveStickyFooter;
