import { StyleSheet } from 'react-native';
import { theme } from './constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContent: {
    paddingBottom: theme.spacing.xxl + 96,
  },
  section: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  heroSection: {
    paddingTop: theme.spacing.xl,
  },
  heroImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
  },
  thumbnailList: {
    paddingTop: theme.spacing.sm,
  },
  thumbnailWrapper: {
    marginRight: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 72,
    height: 96,
  },
  brandText: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  productName: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  ratingValue: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginRight: theme.spacing.xxs,
  },
  ratingStar: {
    color: theme.colors.accent,
    fontSize: theme.fontSize.md,
  },
  ratingCount: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.sm,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: theme.spacing.md,
  },
  priceText: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  mrpText: {
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  discountText: {
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSize.sm,
    color: theme.colors.accent,
    fontWeight: '600',
  },
  bestPriceText: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.success,
  },
  taxText: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted,
  },
  couponBadge: {
    marginTop: theme.spacing.sm,
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  couponText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.accent,
  },
  deliveryRow: {
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
  },
  deliveryText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textPrimary,
  },
  sectionTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  offerCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.sm,
  },
  offerTitle: {
    fontWeight: '600',
    fontSize: theme.fontSize.sm,
    color: theme.colors.textPrimary,
  },
  offerDescription: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  sizeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeChip: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  sizeText: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  highlightList: {
    marginTop: theme.spacing.xs,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.xs,
  },
  bullet: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.accent,
    marginRight: theme.spacing.xs,
  },
  highlightText: {
    flex: 1,
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  specsList: {
    marginTop: theme.spacing.md,
  },
  specsText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  policyCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.sm,
  },
  policyTitle: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.sm,
  },
  policyDescription: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.xs,
    lineHeight: 18,
  },
  reviewsHeader: {
    marginBottom: theme.spacing.md,
  },
  ratingHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingScore: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  ratingMeta: {
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
  },
  reviewCard: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.sm,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewRating: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.accent,
    color: '#ffffff',
    fontWeight: '600',
  },
  reviewTitle: {
    marginTop: theme.spacing.xs,
    fontWeight: '600',
    fontSize: theme.fontSize.sm,
    color: theme.colors.textPrimary,
  },
  reviewBody: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  reviewAuthor: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted,
  },
  relatedScroll: {
    flexDirection: 'row',
  },
  relatedCard: {
    width: 160,
    marginRight: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    overflow: 'hidden',
  },
  relatedImage: {
    width: '100%',
    height: 200,
  },
  relatedContent: {
    padding: theme.spacing.sm,
  },
  relatedBrand: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  relatedName: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  relatedPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: theme.spacing.sm,
  },
  relatedPrice: {
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  relatedMrp: {
    marginLeft: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  relatedDiscount: {
    marginLeft: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.accent,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 6,
    elevation: 6,
  },
  footerPriceGroup: {
    flex: 1,
  },
  footerPriceLabel: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted,
  },
  footerPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: theme.spacing.xs,
  },
  footerPrice: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  footerDiscount: {
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSize.sm,
    color: theme.colors.accent,
    fontWeight: '600',
  },
  footerHint: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
  },
  addToBagButton: {
    backgroundColor: theme.colors.accent,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
  },
  addToBagText: {
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default styles;

