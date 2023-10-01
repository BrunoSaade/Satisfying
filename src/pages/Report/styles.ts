import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  graphic: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 100
  },
  subtitleField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 90
  },
  subtitle: {
    flex: 1,
    maxHeight: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    padding: 12,
    marginRight: 12,

  },
  text: {
    color: 'white',
    fontSize: 23
  }
})

export const imgGraphic = `<svg width="290" height="290" viewBox="0 0 484 484" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="484" height="484" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_6_466" transform="scale(0.00195312)"/>
</pattern> <image id="image0_6_466" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`