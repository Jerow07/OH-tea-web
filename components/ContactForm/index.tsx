import { useState } from 'react'

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <form action="#" className="mt-2">
      <label htmlFor="name">Nombre</label><br />
      <input type="text" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)} className="w-full mt-1 mb-3 text-black" /><br />
      <label htmlFor="email">Email</label><br />
      <input type="email" name="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 mb-3 text-black" /><br />
      <label htmlFor="mensaje">Mensaje</label><br />
      <textarea rows={4} name="message" onChange={(e) => setMessage(e.target.value)} className="w-full resize-none mt-1 text-black"></textarea>
      <div className="text-right">
        <button type="submit" onClick={(e) => handleSubmit(e) }className="bg-white py-1 px-4 mt-2" style={{ color: '#FBA690' }}>Enviar</button>
      </div>
    </form>
  )
}