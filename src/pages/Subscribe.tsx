import { gql, useMutation } from '@apollo/client'
import { useState, FormEvent } from 'react'
import { Logo } from '../components/Logo'

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export function Subscribe() {
  /* transformar em reeducer */
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  /* recebe funcao, nela vc coloca as variaveis que deseja passar */
  const [createSubscriber] = useMutation(CREATE_SUBSCRIBE_MUTATION)

  function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    createSubscriber({
      variables: {
        name,
        email,
      },
    })
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <header className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <article className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong> JS
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </article>
        <aside className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se Gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Your Completed Name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Your E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Secure my spot
            </button>
          </form>
        </aside>
      </header>

      <img src="/src/assets/codeMarkup.png" alt="" />
    </div>
  )
}