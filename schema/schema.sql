
CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    question_id INT,
    security_answer VARCHAR(200),
    FOREIGN KEY (role_id)
        REFERENCES roles (id),
    FOREIGN KEY (question_id)
        REFERENCES security_questions (id)
);

CREATE TABLE expenses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    expense_name VARCHAR(30) NOT NULL,
    expense_description VARCHAR(100),
    amount INT
);


