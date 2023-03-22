import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { feedbackTypes } from '..';
import { FeedbackContentStep, FeedbackContentStepProps } from './FeedbackContentStep';

export default {
    title: 'Widget UI/FeedbackContentStep',   //isto tipo pastas dentro do storybook e embaixo o componente importado
    component: FeedbackContentStep,
    args: {
        feedbackType: 'BUG'
    },
    parameters: {
        msw: {
            handlers: [
                rest.post('/feedbacks', (req, res, ctx) => {
                    // return res(ctx.json({
                    //     message: 'Hello world'  isso aqui para quando quiser configurar uma resposta
                    // }))
                    return res()
                })
            ],
        }
    },
    argTypes: {
        feedbackType: {
            options: Object.keys(feedbackTypes),
            control: {
                type: 'inline-radio'
            }
        }
    },
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
} as Meta<FeedbackContentStepProps> // tipagem para este objeto

export const Bug: StoryObj<FeedbackContentStepProps> = {
    args: {
        feedbackType: 'BUG',
    },
}  //como o Loading não tem muita variação estamos enviando um objeto vazio // e tipagem para este objeto

export const Idea: StoryObj<FeedbackContentStepProps> = {
    args: {
        feedbackType: 'IDEA',
    },
} 

export const Other: StoryObj<FeedbackContentStepProps> = {
    args: {
        feedbackType: 'OTHER',
    },
} 