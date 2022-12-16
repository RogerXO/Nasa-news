import styles from "./DatePicker.module.css"

import moment from 'moment'

function DatePicker({ startDate, endDate, setStartDate, setEndDate, submitDate }) {
    const today = moment(new Date()).format('YYYY-MM-DD')

    function sendDate(e) {
        e.preventDefault()
        submitDate()
    }

    return (
        <div className={styles.date_range_picker}>
            <div className={styles.date_picker}>
                <label htmlFor="fromDate">From date:</label>
                <input 
                    type="date"
                    name="fromDate"
                    id="fromDate"
                    max={today}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className={styles.date_picker}>
                <label htmlFor="toDate">To date:</label>
                <input
                    type="date"
                    name="toDate"
                    id="toDate"
                    max={today}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <button type="submit" onClick={sendDate}>Search</button>
        </div>
    )
}

export default DatePicker