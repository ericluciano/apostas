create table apostas.lotofacil
(
    id          serial            not null
        constraint sorteio_pk
            primary key,
    concurso    integer default 0 not null,
    data        date              not null,
    bola_1      integer           not null,
    bola_2      integer           not null,
    bola_3      integer           not null,
    bola_4      integer           not null,
    bola_5      integer           not null,
    bola_6      integer           not null,
    bola_7      integer           not null,
    bola_8      integer           not null,
    bola_9      integer           not null,
    bola_10     integer           not null,
    bola_11     integer           not null,
    bola_12     integer           not null,
    bola_13     integer           not null,
    bola_14     integer           not null,
    bola_15     integer           not null,
    all_numbers varchar
);

alter table apostas.lotofacil
    owner to root;