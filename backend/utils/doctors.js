const doctors = [
    {
      name: 'Dr. John Doe',
      email: 'john@example.com',
      specialty: 'Cardiology',
      phone: '555-123-4567',
      availability: [
        {
          day: 'Monday',
          startTime: new Date('2024-10-14T09:00:00Z'),
          endTime: new Date('2024-10-14T17:00:00Z'),
        },
        {
          day: 'Wednesday',
          startTime: new Date('2024-10-16T13:00:00Z'),
          endTime: new Date('2024-10-16T16:00:00Z'),
        },
      ],
      description: 'Experienced cardiologist with over 10 years in practice.',
    },
    {
      name: 'Dr. Jane Smith',
      email: 'jane@example.com',
      specialty: 'Dermatology',
      phone: '555-987-6543',
      availability: [
        {
          day: 'Tuesday',
          startTime: new Date('2024-10-15T10:00:00Z'),
          endTime: new Date('2024-10-15T18:00:00Z'),
        },
        {
          day: 'Thursday',
          startTime: new Date('2024-10-17T14:00:00Z'),
          endTime: new Date('2024-10-17T17:00:00Z'),
        },
      ],
      description: 'Specializes in skin conditions and cosmetic treatments.',
    },
  ];
  
  module.exports = doctors;
  