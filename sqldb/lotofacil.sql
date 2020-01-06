create table lotofacil
(
    id           int auto_increment
        primary key,
    concurso     int default 0 not null,
    data         date          not null,
    bola_1       int           not null,
    bola_2       int           not null,
    bola_3       int           not null,
    bola_4       int           not null,
    bola_5       int           not null,
    bola_6       int           not null,
    bola_7       int           not null,
    bola_8       int           not null,
    bola_9       int           not null,
    bola_10      int           not null,
    bola_11      int           not null,
    bola_12      int           not null,
    bola_13      int           not null,
    bola_14      int           not null,
    bola_15      int           not null,
    all_numbers  varchar(255)  null,
    soma_dezenas int           null
);



alter table apostas.lotofacil
    owner to root;