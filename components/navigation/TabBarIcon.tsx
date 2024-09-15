// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import AntDesign from '@expo/vector-icons/AntDesign';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof AntDesign>['name']>) {
  return <AntDesign size={24} style={[{ marginBottom:-1, color: "#56E39F", }, style]} {...rest} />;
}
