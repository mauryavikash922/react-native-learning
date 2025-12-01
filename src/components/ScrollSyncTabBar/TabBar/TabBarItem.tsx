import React from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function TabBarItem({
  tab,
  activeIndex,
  onLayout,
  index,
  onPress,
}: {
  tab: string;
  activeIndex: number;
  onLayout: (event: LayoutChangeEvent, index: number) => void;
  index: number;
  onPress: (index: number, manual: boolean) => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => onPress(index, true)}
      onLayout={e => onLayout(e, index)}
      activeOpacity={0.8}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={[styles.text, index === activeIndex && styles.selectedText]}>
        {tab}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 16,
  },

  text: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  selectedText: {
    fontWeight: '700',
    color: '#3772FF',
  },
});
