INSERT INTO blogs(blog)
VALUES('Dear diary. People were mean to me'),
        ('I was being weird the other day'),
        ('Do it for the gram!');



INSERT INTO comments(comment, blog_id)
VALUES('Grow some balls bro', 1),
    ('Stop being weird!', 2),
    ('FOR THE GRAM!!!', 3);

SELECT * FROM blogs;

SELECT * FROM comments;