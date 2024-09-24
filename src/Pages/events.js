export const EVENTS = [
    {
      event_id: 1,
      title: "Eye Exam",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      disabled: false,
      admin_id: [1, 2, 3, 4]
    },
    {
      event_id: 2,
      title: "Chiropractor Appointment",
      start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
      admin_id: 2,
      color: "#FFFFE0"
    },
    {
      event_id: 3,
      title: "Pediatric appointment",
      start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
      admin_id: 1,
      editable: true,
      deletable: false
    },
    {
      event_id: 4,
      title: "Dentist Appointment",
      start: new Date(
        new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
          new Date().getDate() + 2
        )
      ),
      end: new Date(
        new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
          new Date().getDate() + 3
        )
      ),
      admin_id: 2,
      color: "#D8BFD8"
    },
    {
      event_id: 5,
      title: "ENT doctor",
      start: new Date(
        new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
          new Date().getDate() - 2
        )
      ),
      end: new Date(
        new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
          new Date().getDate() - 2
        )
      ),
      admin_id: 2,
      editable: true,
      color: "#9ACD32"
    },
    {
      event_id: 6,
      title: "Orthodontist Appointment",
      start: new Date(
        new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
          new Date().getDate() - 4
        )
      ),
      end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
      admin_id: 2,
      color: "#S8FBC8F"
    }
  ];
  