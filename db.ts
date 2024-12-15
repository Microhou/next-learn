import { JSONFilePreset } from 'lowdb/node'

// Read or create db.json
const defaultData: { posts: { id: string, title: string , content: string }[]} = { posts: [] }
const db = await JSONFilePreset('db.json', defaultData)

// db.data.posts.push('hello world')
// await db.write()

export default db;