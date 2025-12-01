import React, { useRef } from 'react';
import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { TAB_BAR_ITEMS } from './constants';
import SectionItem from './SectionItem';
import TabBar from './TabBar';

const data = TAB_BAR_ITEMS;
const tabs = TAB_BAR_ITEMS.map(item => item.title);

export default function ScrollSyncTabBar() {
  const countRef = useRef(0);
  const heightRef = useRef(Array(data.length).fill(0));
  const sectionYSv = useSharedValue(Array(data.length).fill(0));
  const activeIndexSv = useSharedValue(0);
  const sectionListRef = useRef<FlatList>(null);
  const userDragged = useSharedValue(false);

  const onLayoutHandler = (event: LayoutChangeEvent, index: number) => {
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
      sectionYSv.value = sectionYs;
    }
  };
  const scrollToIndex = (index: number) => {
    sectionListRef.current?.scrollToOffset({
      offset: sectionYSv.value[index],
      animated: true,
    });
  };

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      if (userDragged.value) {
        const { y } = event.contentOffset;
        let activeIndex = 0;
        for (let i = 1; i < sectionYSv.value.length; i++) {
          if (y >= sectionYSv.value[i - 1] && y < sectionYSv.value[i]) {
            activeIndex = i - 1;
            break;
          }
        }
        activeIndexSv.value = activeIndex;
      }
    },
    onBeginDrag: () => {
      userDragged.value = true;
    },
  });
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return <SectionItem item={item} onLayout={onLayoutHandler} index={index} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <View style={styles.headerOverlay} />
        <View style={styles.headerBadge}>
          <Text style={styles.badgeText}>Featured Experience</Text>
        </View>
        <Text style={styles.title}>City Explorer</Text>
        <Text style={styles.subtitle}>
          Discover India’s signature destinations with curated highlights and
          city insights.
        </Text>
      </View>
      <TabBar
        tabs={tabs}
        activeIndex={activeIndexSv}
        scrollToIndex={scrollToIndex}
        userDragged={userDragged}
      />
      <Animated.FlatList
        ref={sectionListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        onScroll={onScrollHandler}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#EEF2F6',
  },
  headerCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    paddingVertical: 26,
    paddingHorizontal: 24,
    borderRadius: 28,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#2746901f',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
    elevation: 7,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#3772FF15',
  },
  headerBadge: {
    backgroundColor: '#3772FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    color: '#1C1C1E',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4B5563',
  },
});
