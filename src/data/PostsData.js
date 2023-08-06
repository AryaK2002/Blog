const postsData = [
    {
      id: '1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      date: '2023-08-01',
      comments: [
        {
          id: '1',
          postId: '1',
          text: 'Nice post!',
          date: '2023-08-01',
        },
      ],
    },
    {
      id: '2',
      title: 'Second Post',
      content: 'This is the content of the second post.',
      date: '2023-08-02',
      comments: [
        {
          id: '2',
          postId: '2',
          text: 'Great post!',
          date: '2023-08-02',
        },
      ],
    },
  ];
  
  export default postsData;
  