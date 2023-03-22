import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react';
import { FeedbackTypeStep } from './FeedbackTypeStep';

export default {
    title: 'Widget UI/FeedbackTypeStep',   //isto tipo pastas dentro do storybook e embaixo o componente importado
    component: FeedbackTypeStep,
    decorators: [
        (Story) => {
            return (
                <Popover>
                    <Popover.Panel static>
                        <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
                      {Story()}
                                   {/* Poderia ser chamado assi <Story /> mas perde referencia para o nome do componente   */}
                        </div>
                    </Popover.Panel>
                </Popover>
            )
        }
    ]
} as Meta // tipagem para este objeto

export const Default: StoryObj = {}  //como o Loading não tem muita variação estamos enviando um objeto vazio // e tipagem para este objeto