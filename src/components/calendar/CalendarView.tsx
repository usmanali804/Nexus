import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function CalendarView() {
  const meetings = [
    {
      title: "Investor Meeting",
      date: "2025-12-05"
    }
  ];

  return (
    <div className="p-4 bg-white rounded shadow">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={meetings}
      />
      <div className="mt-4">
        <button className="bg-primary text-white px-4 py-2 rounded">
          Add Availability
        </button>
        <button className="bg-secondary text-white px-4 py-2 rounded ml-2">
          Request Meeting
        </button>
      </div>
      {/* This is a mock implementation. */}
      {/* Meeting requests are simulated using frontend state only. */}
    </div>
  );
}