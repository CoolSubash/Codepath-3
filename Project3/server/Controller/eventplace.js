import { pool } from '../config/database.js'

const getEventsByPlaceName = async (req, res) => {
  try {
    console.log(req.params.id)
    const query = {
      text: 'SELECT * FROM Event WHERE place_name = $1',
      values: [req.params.id],
    }
    const result = await pool.query(query)
    return res.status(200).json(result.rows)
  } catch (error) {
    console.error('Error fetching events:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default getEventsByPlaceName
