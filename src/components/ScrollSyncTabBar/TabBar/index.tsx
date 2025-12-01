import React, { useRef, useState } from 'react';
import { FlatList, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import TabBarItem from './TabBarItem';

export default function TabBar({
  tabs,
  activeIndex,
  scrollToIndex,
  userDragged,
}: {
  tabs: string[];
  activeIndex: SharedValue<number>;
  scrollToIndex: (index: number) => void;
  userDragged: SharedValue<boolean>;
}) {
  const countRef = useRef(0);
  const widthRef = useRef(Array(tabs.length).fill(0));
  const sectionXsSv = useSharedValue(Array(tabs.length).fill(0));
  const widthSv = useSharedValue(Array(tabs.length).fill(0));
  const scrollXSv = useSharedValue(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const layoutHandler = (event: LayoutChangeEvent, index: number) => {
    const { width } = event.nativeEvent.layout;
    widthRef.current[index] = width;
    countRef.current++;
    if (countRef.current === tabs.length) {
      let xSum = 0;
      const sectionXs = [];
      sectionXs.push(0);
      for (let i = 0; i < tabs.length; i++) {
        xSum += widthRef.current[i];
        sectionXs.push(xSum);
      }
      sectionXsSv.value = sectionXs;
      widthSv.value = widthRef.current;
    }
  };

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            sectionXsSv.value[activeIndex.value] - scrollXSv.value +28,
            { duration: 300 },
          ),
        },
      ],
      width: withTiming(widthSv.value[activeIndex.value], { duration: 300 }),
    };
  });

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollXSv.value = event.contentOffset.x;
    },
  });

  const onPressTabBarItem = (index: number, manual = false) => {
    if (manual) {
      scrollToIndex(index);
      userDragged.value = false;
      activeIndex.value = index;
    } else {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
    setActiveTabIndex(index);
  };

  useAnimatedReaction(
    () => activeIndex.value,
    index => {
      scheduleOnRN(onPressTabBarItem, index);
    },
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={tabs}
        renderItem={({ item, index }) => (
          <TabBarItem
            tab={item}
            activeIndex={activeTabIndex}
            onLayout={layoutHandler}
            index={index}
            onPress={onPressTabBarItem}
          />
        )}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        onScroll={onScrollHandler}
        bounces={false}
      />
      <Animated.View style={[styles.indicator, indicatorStyle]} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 24,
    shadowColor: '#0a84ff30',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingHorizontal: 8,
  },
  indicator: {
    position: 'absolute',
    bottom: 10,
    width: 100,
    height: 4,
    backgroundColor: '#3772FF',
    borderRadius: 12,
  },
});
