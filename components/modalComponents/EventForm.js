import styles from "./styles/WebForm.module.css";
function EventForm({ type, title, desc, date, time, location, duration }) {
  return (
    <>
      <label htmlFor="event-type">Type of Event:</label>
      <select ref={type} name="event-type" defaultValue={'concert'}>
        <option value="house-party">House Party</option>
        <option value="festival">Festival</option>
        <option value="concert">
          Concert
        </option>
      </select>

      <label htmlFor="title">Title:</label>
      <input
        ref={title}
        type="text"
        placeholder="SanFrancisco Concert"
        className="w-full"
        required
      />
      <div className={styles.flexed_details}>
        <label htmlFor="date">Date:</label>
        <input ref={date} type="date" name="date" className="date" required />

        <label htmlFor="time">Time:</label>
        <input ref={time} type="time" />
      </div>
      {/* <small>Leave blank if no time is given</small> */}

      <label htmlFor="duration">Duration: (minutes)</label>
      <input ref={duration} type="text" placeholder="246" />

      <label htmlFor="description">Description:</label>
      <textarea
        ref={desc}
        name="description"
        id="description"
        type="text"
        placeholder="Watch Fireboy DML perform live this Sunday afternoon from..."
        className="w-full"
        required
      />

      <label htmlFor="location">Location: </label>
      <input ref={location} type="text" placeholder="Showgrounds" />
    </>
  );
}

export default EventForm;
