USE spaDB;

CREATE TABLE IF NOT EXISTS products (
	id_product SMALLINT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(20) NOT NULL,
    price FLOAT NOT NULL,
    description VARCHAR(400) NOT NULL,
    CONSTRAINT pk_idProduct
		PRIMARY KEY (id_product)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO products (name, code, price, description)
VALUES ('Articulo1', '0001', 12.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO products (name, code, price, description)
VALUES ('Articulo2', '0002', 34.50, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO products (name, code, price, description)
VALUES ('Articulo3', '0003', 8.80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO products (name, code, price, description)
VALUES ('Articulo4', '0004', 235.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO products (name, code, price, description)
VALUES ('Articulo5', '0005', 9.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO products (name, code, price, description)
VALUES ('Articulo6', '0006', 12.55, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO products (name, code, price, description)
VALUES ('Articulo7', '0007', 4.60, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');