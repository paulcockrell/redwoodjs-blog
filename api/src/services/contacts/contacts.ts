import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'
import type { Prisma } from '@prisma/client'
import { validate } from '@redwoodjs/api'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({
  id,
}: Prisma.ContactWhereUniqueInput) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = ({
  input,
}) => {
  validate(input.email, 'email', { email: true })
  return db.contact.create({
    data: input,
  })
}
