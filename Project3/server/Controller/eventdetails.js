import { pool } from '../config/database.js'

const getEventsBydetails = async (req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM Event WHERE id = $1',
      values: [req.params.id],
    }
    const result = await pool.query(query)

    return res.json(result.rows)
  } catch (error) {
    console.error('Error fetching events:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default getEventsBydetails
