import * as express from 'express'
import * as cors from 'cors'


const app = express()
const port =  process.env.PORT || 4001;

app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res, next) => {
    res.json('Hello world')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})