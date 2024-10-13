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
    {
      name: 'Dr. Robert Wilson',
      email: 'robert@example.com',
      specialty: 'Neurology',
      phone: '555-112-3344',
      availability: [
        {
          day: 'Monday',
          startTime: new Date('2024-10-14T08:00:00Z'),
          endTime: new Date('2024-10-14T15:00:00Z'),
        },
        {
          day: 'Friday',
          startTime: new Date('2024-10-18T10:00:00Z'),
          endTime: new Date('2024-10-18T16:00:00Z'),
        },
      ],
      description: 'Expert in brain and nervous system disorders.',
    },
    {
      name: 'Dr. Linda Johnson',
      email: 'linda@example.com',
      specialty: 'Pediatrics',
      phone: '555-223-3344',
      availability: [
        {
          day: 'Tuesday',
          startTime: new Date('2024-10-15T09:00:00Z'),
          endTime: new Date('2024-10-15T17:00:00Z'),
        },
        {
          day: 'Thursday',
          startTime: new Date('2024-10-17T09:00:00Z'),
          endTime: new Date('2024-10-17T15:00:00Z'),
        },
      ],
      description: 'Caring pediatrician with over 15 years of experience.',
    },
    {
      name: 'Dr. Michael Brown',
      email: 'michael@example.com',
      specialty: 'Orthopedics',
      phone: '555-445-6677',
      availability: [
        {
          day: 'Wednesday',
          startTime: new Date('2024-10-16T11:00:00Z'),
          endTime: new Date('2024-10-16T19:00:00Z'),
        },
        {
          day: 'Friday',
          startTime: new Date('2024-10-18T08:00:00Z'),
          endTime: new Date('2024-10-18T15:00:00Z'),
        },
      ],
      description: 'Specialist in musculoskeletal issues and joint care.',
    },
    {
      name: 'Dr. Sarah Taylor',
      email: 'sarah@example.com',
      specialty: 'Ophthalmology',
      phone: '555-334-7788',
      availability: [
        {
          day: 'Monday',
          startTime: new Date('2024-10-14T09:00:00Z'),
          endTime: new Date('2024-10-14T16:00:00Z'),
        },
        {
          day: 'Thursday',
          startTime: new Date('2024-10-17T10:00:00Z'),
          endTime: new Date('2024-10-17T18:00:00Z'),
        },
      ],
      description: 'Eye care expert specializing in vision correction.',
    },
    {
      name: 'Dr. David Clark',
      email: 'david@example.com',
      specialty: 'Oncology',
      phone: '555-223-4455',
      availability: [
        {
          day: 'Tuesday',
          startTime: new Date('2024-10-15T10:00:00Z'),
          endTime: new Date('2024-10-15T18:00:00Z'),
        },
        {
          day: 'Thursday',
          startTime: new Date('2024-10-17T12:00:00Z'),
          endTime: new Date('2024-10-17T17:00:00Z'),
        },
      ],
      description: 'Oncologist with a focus on personalized cancer care.',
    },
    {
      name: 'Dr. Emily Martinez',
      email: 'emily@example.com',
      specialty: 'Gynecology',
      phone: '555-556-7788',
      availability: [
        {
          day: 'Monday',
          startTime: new Date('2024-10-14T08:00:00Z'),
          endTime: new Date('2024-10-14T14:00:00Z'),
        },
        {
          day: 'Wednesday',
          startTime: new Date('2024-10-16T09:00:00Z'),
          endTime: new Date('2024-10-16T16:00:00Z'),
        },
      ],
      description: 'Expert in women’s reproductive health.',
    },
    {
      name: 'Dr. Chris Evans',
      email: 'chris@example.com',
      specialty: 'Psychiatry',
      phone: '555-667-8899',
      availability: [
        {
          day: 'Wednesday',
          startTime: new Date('2024-10-16T10:00:00Z'),
          endTime: new Date('2024-10-16T17:00:00Z'),
        },
        {
          day: 'Friday',
          startTime: new Date('2024-10-18T09:00:00Z'),
          endTime: new Date('2024-10-18T15:00:00Z'),
        },
      ],
      description: 'Specialist in mental health care with a focus on anxiety and depression.',
    },
    {
      name: 'Dr. Olivia Green',
      email: 'olivia@example.com',
      specialty: 'Endocrinology',
      phone: '555-112-3344',
      availability: [
        {
          day: 'Thursday',
          startTime: new Date('2024-10-17T09:00:00Z'),
          endTime: new Date('2024-10-17T17:00:00Z'),
        },
        {
          day: 'Friday',
          startTime: new Date('2024-10-18T09:00:00Z'),
          endTime: new Date('2024-10-18T14:00:00Z'),
        },
      ],
      description: 'Endocrinologist with expertise in diabetes and hormone disorders.',
    },
  ];
  
  module.exports = doctors;
  