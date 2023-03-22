import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

export default {
    title: 'Components/Loading',   //isto tipo pastas dentro do storybook e embaixo o componente importado
    component: Loading,
} as Meta // tipagem para este objeto

export const Default: StoryObj = {}  //como o Loading não tem muita variação estamos enviando um objeto vazio // e tipagem para este objeto