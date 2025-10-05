# Design Guidelines - Бонус Батутный Парк

## Color Palette

### Primary Colors
- **Background**: #0b1020 (Dark purple/navy)
- **Card Background**: rgba(255, 255, 255, 0.05) (Semi-transparent white)
- **Primary Accent**: #8b5cf6 (Purple for buttons and highlights)
- **Secondary Accent**: #06b6d4 (Cyan/teal for secondary elements)

### Status Colors
- **Success/Profit**: #10b981 (Green) - for profit ≥ 0
- **Error/Loss**: #ef4444 (Red) - for profit < 0
- **Warning**: #f59e0b (Amber)

### Text Colors
- **Primary Text**: #ffffff (White)
- **Secondary Text**: rgba(255, 255, 255, 0.7)
- **Tertiary Text**: rgba(255, 255, 255, 0.5)

### Border Colors
- **Default**: rgba(255, 255, 255, 0.1)
- **Hover**: rgba(255, 255, 255, 0.2)
- **Glow**: rgba(139, 92, 246, 0.5) - for neon effects

## Typography

- **Font Family**: 'Inter', sans-serif (with 'Poppins' as fallback)
- **Headings**: 
  - H1: 2.5rem (40px), bold
  - H2: 2rem (32px), semibold
  - H3: 1.5rem (24px), semibold
- **Body**: 1rem (16px), normal
- **Small**: 0.875rem (14px)

## Spacing

- **Small**: 0.5rem (8px)
- **Medium**: 1rem (16px)
- **Large**: 1.5rem (24px)
- **XLarge**: 2rem (32px)

## Components

### Cards
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border radius: 12px
- Padding: 1.5rem (24px)
- Box shadow: 0 4px 6px rgba(0, 0, 0, 0.3)

### Buttons
- **Primary**: 
  - Background: #8b5cf6
  - Hover: #7c3aed
  - Box shadow (glow): 0 0 20px rgba(139, 92, 246, 0.5)
- **Secondary/Outline**:
  - Border: 1px solid rgba(255, 255, 255, 0.2)
  - Hover background: rgba(255, 255, 255, 0.1)
- **Danger**: 
  - Background: #ef4444
  - Hover: #dc2626
- Border radius: 8px
- Padding: 0.75rem 1.5rem

### Input Fields
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Focus border: #8b5cf6
- Focus glow: 0 0 0 3px rgba(139, 92, 246, 0.2)
- Border radius: 8px
- Padding: 0.75rem

### Tables
- Header background: rgba(255, 255, 255, 0.08)
- Row hover: rgba(255, 255, 255, 0.03)
- Border: rgba(255, 255, 255, 0.1)

## Layout

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Grid System
- Dashboard cards: Grid with responsive columns (1 col mobile, 2-3 cols tablet, 3-4 cols desktop)
- Tables: Full width with horizontal scroll on mobile

## Special Effects

### Neon Glow
- Primary buttons: box-shadow: 0 0 20px rgba(139, 92, 246, 0.5)
- Active inputs: box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2)

### Transitions
- All interactive elements: transition: all 0.3s ease
- Hover scale: transform: scale(1.02)

## Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- Focus indicators visible on all interactive elements
- Keyboard navigation support
