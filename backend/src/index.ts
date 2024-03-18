import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'
import { cors } from 'hono/cors'

const app = new Hono<{ 
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET:string
  },
	Variables : {
		userId: string
	}
}>()

app.use("/*",cors())

//Calling functions from user.ts
app.route("/api/v1/user", userRouter)
//Calling functions from post.ts
app.route("/api/v1/post",postRouter)



app.get('/', (c) => {
  
  return c.text('Hello Hono!')
})


export default app
