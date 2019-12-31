create table apostas.megasena
(
    id          serial  not null
        constraint megasena_pk
            primary key,
    concurso    integer not null,
    data        date    not null,
    bola_1      integer not null,
    bola_2      integer not null,
    bola_3      integer not null,
    bola_4      integer not null,
    bola_5      integer not null,
    bola_6      integer not null,
    all_numbers varchar(150)
);

alter table apostas.megasena
    owner to root;

