import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { phone, projectType, timing } = body

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'devis@ajp-construction.fr',
    to: ['a.jeffrey974@hotmail.com', 'ajc.pedroa@outlook.fr'],
    subject: `🔔 Demande de rappel — ${projectType}`,
    html: `
      <h2 style="color: #C41E1E;">Nouvelle demande de rappel rapide</h2>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p><strong>Type de projet :</strong> ${projectType}</p>
      <p><strong>Délai souhaité :</strong> ${timing}</p>
      <hr/>
      <p style="color: #C41E1E; font-weight: bold;">⚡ À rappeler dès que possible !</p>
    `,
  })

  return { ok: true }
})
