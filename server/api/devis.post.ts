import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'a.jeffrey974@hotmail.com',
    subject: `Nouvelle demande de devis — ${body.projectType}`,
    html: `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom :</strong> ${body.lastName} ${body.firstName}</p>
      <p><strong>Email :</strong> ${body.email}</p>
      <p><strong>Téléphone :</strong> ${body.phone}</p>
      <hr/>
      <p><strong>Type de travaux :</strong> ${body.projectType}</p>
      <p><strong>Lieu du chantier :</strong> ${body.location}</p>
      <p><strong>Budget :</strong> ${body.budget || 'Non défini'}</p>
      <p><strong>Description :</strong><br/>${body.description}</p>
    `,
  })

  return { ok: true }
})
