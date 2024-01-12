```css
/*
 * Optional CSS
 * -----------------------------------
 */

/* This is added for the flashing that happens when toggling between themes */
ion-item {
  --transition: none;
}

/* This sets a different background and item background in light mode on ios */
.ios {
  --ion-background-color: var(--ion-color-step-50, #f2f2f6);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This sets a different background and item background in light mode on md */
.md {
  --ion-background-color: var(--ion-color-step-100, #f9f9f9);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This sets a different item background in dark mode on ios and md */
@media (prefers-color-scheme: dark) {
  .ios,
  .md {
    --ion-item-background: #1c1c1d;
  }
}
```