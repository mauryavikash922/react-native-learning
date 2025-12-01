import React from 'react';
import { View, Text, StyleSheet, LayoutChangeEvent, Image } from 'react-native';

export default function SectionItem({
  item,
  onLayout,
  index,
}: {
  item: any;
  onLayout: (event: LayoutChangeEvent, index: number) => void;
  index: number;
}) {
  return (
    <View style={styles.container} onLayout={e => onLayout(e, index)}>
      <View
        style={[
          styles.cardContainer,
          {
            borderColor: `${item.accentColor}33`,
            shadowColor: `${item.accentColor}55`,
          },
        ]}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View
            style={[styles.tag, { backgroundColor: `${item.accentColor}E6` }]}
          >
            <Text style={styles.tagText}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,

    overflow: 'hidden',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  imageWrapper: {
    position: 'relative',
    height: 210,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tag: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.4,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3A3A3C',
  },
});
