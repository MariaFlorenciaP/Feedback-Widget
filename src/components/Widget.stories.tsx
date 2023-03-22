import { Meta, StoryObj } from '@storybook/react';
import { Widget } from './Widget';

export default {
    title: 'Widget',   //isto tipo pastas dentro do storybook e embaixo o componente importado
    component: Widget,
} as Meta // tipagem para este objeto

export const Default: StoryObj = {}  //como o Loading não tem muita variação estamos enviando um objeto vazio // e tipagem para este objeto