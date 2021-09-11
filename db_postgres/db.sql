-- 1 CATEGORIAS

INSERT INTO public.categorias (categoria,"createdAt","updatedAt") VALUES
	 ('Games','2021-09-08 20:19:43.499594-03','2021-09-08 20:19:43.499594-03'),
	 ('Informatica','2021-09-08 20:21:38.350174-03','2021-09-08 20:21:38.350174-03'),
	 ('Eletrodomestico','2021-09-08 20:22:17.558568-03','2021-09-08 20:22:17.558568-03');

-- 2 PRODUTOS

INSERT INTO public.produtos (produto,descricao,marca,valor,estoque,image_prod,"createdAt","updatedAt","CategoriaId") VALUES
	 ('Console ','Xbox Series S 2020 Nova Geracao 512GB SSD - 1 Controle Branco','Microsoft',2759.05,10,'https://uploaddeimagens.com.br/images/003/421/169/thumb/XBOX.jpg?1631186153','2021-09-08 20:49:30.952657-03','2021-09-08 20:49:30.952657-03',1),
	 ('Multifuncional ','Impressora Multifuncional Epson EcoTank L3110 - Tanque de Tinta Colorida USB','Epson',899.19,100,'https://uploaddeimagens.com.br/images/003/422/879/full/impressora.jpg?1631229623','2021-09-09 20:22:44.445322-03','2021-09-09 20:22:44.445322-03',2),
	 ('SSD','SSD 240GB Kingston Sata Rev. 3.0 - Leituras 500MB/s e Gravacao 350MB/s A400','Kingston',249.99,200,'https://uploaddeimagens.com.br/images/003/422/881/full/SSD.jpg?1631229846','2021-09-09 20:25:52.753236-03','2021-09-09 20:25:52.753236-03',2),
	 ('Microondas','Forno Micro-Ondas Painel Seguro 20L (MTD30) - Electrolux','Electrolux',430.09,100,'https://uploaddeimagens.com.br/images/003/422/924/thumb/microondas.jpg?1631232528','2021-09-09 21:10:37.731924-03','2021-09-09 21:10:37.731924-03',3),
	 ('Notebook','Notebook Ultra UB420 Intel Core i3 4GB - 120GB SSD 14.1 Full HD Windows 10','Ultra',2069.21,20,'https://uploaddeimagens.com.br/images/003/422/883/full/notebook_ultra.jpg?1631230278','2021-09-09 20:33:23.299166-03','2021-09-09 20:33:23.299166-03',2),
	 ('Monitor','Monitor para PC Philips V Line 193V5LHSB2 -18.5 LED Widescreen HD HDMI VGA','Philips',620.12,40,'https://uploaddeimagens.com.br/images/003/422/871/full/monitor.jpg?1631229349','2021-09-09 20:18:42.703802-03','2021-09-09 20:18:42.703802-03',2),
	 ('Maquina de lavar','Lavadora de Roupas Consul CWB09 ABANA - 9Kg 15 Programas de Lavagem','Consul',1398.05,10,'https://uploaddeimagens.com.br/images/003/422/933/thumb/lavadora.jpg?1631232753','2021-09-09 21:14:43.478895-03','2021-09-09 21:14:43.478895-03',3),
	 ('Console ','PlayStation 4 Mega Pack V18 2021 1TB 1 Controle - Preto Sony com 3 Jogos na Memoria','Sony',2899.09,10,'https://uploaddeimagens.com.br/images/003/422/902/full/PS4.PNG?1631231121','2021-09-08 21:50:17.062734-03','2021-09-08 21:50:17.062734-03',1),
	 ('Nintendo','Console nintendo switch 32gb com 1 controle joy-con vermelho e azul hac-001-01 nintendo','Nintendo',2158.21,5,'https://uploaddeimagens.com.br/images/003/421/176/thumb/Nintendo.jpg?1631186540','2021-09-09 08:23:51.007086-03','2021-09-09 08:23:51.007086-03',1),
	 ('Controle','Controle Ps4 Preto Dualshock 4 Original Sony','Sony',492.89,5,'https://uploaddeimagens.com.br/images/003/422/851/full/controle_PS4.jpg?1631228216','2021-09-09 19:59:35.931157-03','2021-09-09 19:59:35.931157-03',1);
INSERT INTO public.produtos (produto,descricao,marca,valor,estoque,image_prod,"createdAt","updatedAt","CategoriaId") VALUES
	 ('Jogos','FIFA 22 para Xbox Series X Electronic Arts','Eletronics Arts',360.91,30,'https://uploaddeimagens.com.br/images/003/422/865/full/fiba_Xbox.jpg?1631229110','2021-09-09 20:13:59.179138-03','2021-09-09 20:13:59.179138-03',1),
	 ('Pecas','Placa de Video Afox Radeon RX 550 4GB - GDDR5 128 bits AFRX550-4096D5H4-V4','Afox',1034.16,49,'https://uploaddeimagens.com.br/images/003/422/887/full/placa_de_video.jpg?1631230547','2021-09-09 20:37:32.954063-03','2021-09-09 20:37:32.954063-03',2),
	 ('Forno Eletrico','Forno de Embutir a Gas GLP Brastemp Grill - com Timer 78L BOA84 AERN','Brastemp',1659.98,20,'https://uploaddeimagens.com.br/images/003/422/935/thumb/forno_embutir.jpg?1631232957','2021-09-09 21:19:28.572682-03','2021-09-09 21:19:28.572682-03',3),
	 ('Fogao','Fogao 5 Bocas Esmaltec Agata - Acendimento Automatico Branco','Esmaltec',789.34,20,'https://uploaddeimagens.com.br/images/003/422/909/thumb/fogao.jpg?1631231606','2021-09-09 20:55:36.476162-03','2021-09-09 20:55:36.476162-03',3),
	 ('Geladeira','Refrigerador Electrolux Cycle Defrost 240 Litros Branco RE31- 220 Volts','Electrolux',1434.74,100,'https://uploaddeimagens.com.br/images/003/422/905/thumb/geladeira_electrolux.jpg?1631231385','2021-09-09 20:51:46.016216-03','2021-09-09 20:51:46.016216-03',3),
	 ('Controle','Controle para Xbox Series X Xbox Series S - Xbox One X sem Fio Robot White Branco','Microsoft',499.5,20,'https://uploaddeimagens.com.br/images/003/422/861/full/controle_xbox.jpg?1631228834','2021-09-09 20:09:26.92079-03','2021-09-09 20:09:26.92079-03',1),
	 ('Forno Eletrico','Forno Eletrico de Bancada Britania 40L - BFE40PI','Britania',319.09,50,'https://uploaddeimagens.com.br/images/003/422/916/thumb/forno_eletrico.jpg?1631231930','2021-09-09 21:00:57.934477-03','2021-09-09 21:00:57.934477-03',3),
	 ('Notebook','Notebook Acer Aspire 5 A515-54-57EN Intel Core i5 - 8GB 256GB SSD Full HD LED Windows 10','Acer',3419.15,6,'https://uploaddeimagens.com.br/images/003/421/193/full/notebook_Acer.jpg?1631187092','2021-09-09 08:33:26.815091-03','2021-09-09 08:33:26.815091-03',2),
	 ('Controle','Controle para PS5 sem Fio DualSense Sony - Cosmic Red','Sony',474.05,20,'https://uploaddeimagens.com.br/images/003/422/855/full/controle_PS5.jpg?1631228491','2021-09-09 20:05:04.383025-03','2021-09-09 20:05:04.383025-03',1),
	 ('Cooktop ','Cooktop 5 Bocas Continental a Gas GLP Preto - KC5GP','Continental',499.09,50,'https://uploaddeimagens.com.br/images/003/422/921/thumb/coocktoop.jpg?1631232264','2021-09-09 21:06:25.88169-03','2021-09-09 21:06:25.88169-03',3);
INSERT INTO public.produtos (produto,descricao,marca,valor,estoque,image_prod,"createdAt","updatedAt","CategoriaId") VALUES
	 ('Periferico','Mouse sem Fio Logitech Optico 1000DPI 3 Botoes - M170 Prata','Logitech',54.91,200,'https://uploaddeimagens.com.br/images/003/422/882/full/mouse.jpg?1631230049','2021-09-09 20:29:33.04784-03','2021-09-09 20:29:33.04784-03',2);

-- 3 ENDEREÇO

INSERT INTO public.endereco (logradouro,numero,complemento,bairro,cidade,estado,cep,"createdAt","updatedAt") VALUES
	 ('Rua dos alecrins',15,'Casa B','Jardim Paulista','Florianopolis','SC','32400-000','2021-09-08 20:53:01.273498-03','2021-09-08 20:53:01.273498-03'),
	 ('Avenida Manaus',114,'Loja','Coroados','Guaratuba','PR','83280-000','2021-09-10 11:06:21.092118-03','2021-09-10 11:06:21.092118-03'),
	 ('Rua Arnoldo Ravanelo',121,'Sobrado','Prado Velho ','Curitiba','PR','80215-550','2021-09-10 11:07:40.990614-03','2021-09-10 11:07:40.990614-03'),
	 ('Rua Padre Viegas De Menezes',210,'Casa A','Itaquera','São Paulo','SP','08220-970','2021-09-10 11:11:53.808586-03','2021-09-10 11:11:53.808586-03'),
	 ('Avenida Afonso Pena',222,'Sobrado 2','Centro','Campo Belo','MG','37270-000','2021-09-10 11:13:09.514575-03','2021-09-10 11:13:09.514575-03'),
	 ('Rua Conselheiro Franco',980,'Sobrado 1','Centro','Feira de Santana','BA','44002-128','2021-09-10 11:14:32.6628-03','2021-09-10 11:14:32.6628-03'),
	 ('Avenida Prudente de Morais',34,'Casa 1','Centro','Natal','RN','59390-000','2021-09-10 11:16:02.762027-03','2021-09-10 11:16:02.762027-03');

-- 4 USUÁRIO

INSERT INTO public.usuario (nome,email,cpf,data_nascimento,senha,"createdAt","updatedAt","EnderecoId") VALUES
	 ('Gabriel Mattes','gabriel.mattes@gmail.com','237.909.768-99','2000-04-12 00:00:00-03','989876','2021-09-10 11:23:39.948059-03','2021-09-10 11:23:39.948059-03',5),
	 ('Mayko Fernandh de Oliveira','mikeventosul@gmail.com','434.219.000-71','1977-09-09 00:00:00-03','212323','2021-09-10 11:18:41.31674-03','2021-09-10 11:18:41.31674-03',2),
	 ('Sebastiao Lopes','lopes.sebastiao@gmail.com','450.213.214-09','1944-07-04 00:00:00-03','898009','2021-09-10 11:19:59.325566-03','2021-09-10 11:19:59.325566-03',3),
	 ('Izabel Ferreira','ferreira.izabel@gmail.com','324.213.223-04','1960-08-02 00:00:00-03','009867','2021-09-10 11:21:31.193292-03','2021-09-10 11:21:31.193292-03',4),
	 ('Antonio Carlos Silva','antonio.silva@hotmail.com','564.908.899-00','1977-12-25 00:00:00-03','980002','2021-09-10 11:25:07.928666-03','2021-09-10 11:25:07.928666-03',6),
	 ('Selma Oliveira','selma.oliveira@yahoo.com','987.009.767-09','1980-09-09 00:00:00-03','777876','2021-09-10 11:26:22.547668-03','2021-09-10 11:26:22.547668-03',7),
	 ('Lenardo Nogueira','leonardo@gmail.com','123.456.036-21','1985-09-15 00:00:00-03','998765','2021-09-08 20:53:12.936295-03','2021-09-08 20:53:12.936295-03',1);

-- 5 LOJAS

INSERT INTO public.lojas (nome,logradouro,numero,complemento,bairro,cidade,estado,cep,telefone,"createdAt","updatedAt") VALUES
	 ('Florianopolis Convencional',' Avenida Conselheiro Mafra',122,'Magazine Luiza','Centro','Florianopolis','SC','88010-100',' (47)3952-3400','2021-09-08 20:59:28.356159-03','2021-09-08 20:59:28.356159-03'),
	 ('Loja Centro','Rua Itapora',319,'Magazine Luiza','Centro','Matinhos','PR','83260-000','(41) 3452-8700','2021-09-10 10:37:54.303637-03','2021-09-10 10:37:54.303637-03'),
	 ('Loja Taruma','Avenda Victor Ferreira Do Amaral',2633,'Magazine Luiza','Taruma','Curitiba','PR','82810-350','(41) 3617-8700','2021-09-10 10:47:11.861862-03','2021-09-10 10:47:11.861862-03'),
	 ('Loja Itaquera','Rua Padre Viegas De Menezes',440,'Magazine Luiza','Itaquera','São Paulo','SP','08220-970','(11) 2057-7950','2021-09-10 10:47:11.865394-03','2021-09-10 10:47:11.865394-03'),
	 ('Loja Centro','Rua Conselheiro Franco',293,'Magazine Luiza','Centro','Feira de Santana','BA','44002-128','(75) 3612-0400','2021-09-10 10:58:26.719656-03','2021-09-10 10:58:26.719656-03'),
	 ('Loja Lagoa Nova','Avenida Prudente de Morais',2.188,'Magazine Luiza','Lagoa Nova','Natal','RN','59390-000','(84) 3216-4300','2021-09-10 11:02:07.555571-03','2021-09-10 11:02:07.555571-03'),
	 ('Loja Centro','Avenida Afonso Pena',261,'Magazine Luiza','Centro','Campo Belo','MG','37270-000','(35) 3831-9100','2021-09-10 10:55:22.303436-03','2021-09-10 10:55:22.303436-03');

-- 6 LISTAS

INSERT INTO public.lista (numero_pedido,quantidade,data_entrega,data_finalizacao,"createdAt","updatedAt","LojaId","UsuarioId","ProdutoId") VALUES
	 (1,1,'2021-09-01 00:00:00-03','2021-09-08 00:00:00-03','2021-09-08 21:09:05.709737-03','2021-09-08 21:09:05.709737-03',1,1,2),
	 (7,1,'2021-09-10 00:00:00-03',NULL,'2021-09-10 11:55:53.463328-03','2021-09-10 11:55:53.463328-03',7,7,1),
	 (2,1,'2021-09-10 00:00:00-03',NULL,'2021-09-10 11:49:44.471342-03','2021-09-10 11:49:44.471342-03',2,2,3),
	 (3,1,'2021-08-09 00:00:00-03','2021-08-15 00:00:00-03','2021-09-10 11:51:18.744496-03','2021-09-10 11:51:18.744496-03',3,3,4),
	 (4,1,'2021-09-01 00:00:00-03','2021-09-08 00:00:00-03','2021-09-10 11:53:55.646447-03','2021-09-10 11:53:55.646447-03',4,4,5),
	 (5,1,'2021-09-02 00:00:00-03','2021-09-09 00:00:00-03','2021-09-10 11:53:55.649077-03','2021-09-10 11:53:55.649077-03',5,5,6),
	 (6,1,'2021-09-10 00:00:00-03',NULL,'2021-09-10 11:54:40.866698-03','2021-09-10 11:54:40.866698-03',6,6,7);
