SELECT bola_1 as numero, COUNT(*) ocorrencias
FROM (
    SELECT bola_1 FROM apostas.megasena
    UNION ALL
    SELECT bola_2 FROM apostas.megasena
    UNION ALL
    SELECT bola_3 FROM apostas.megasena
    UNION ALL
    SELECT bola_4 FROM apostas.megasena
    UNION ALL
    SELECT bola_5 FROM apostas.megasena
    UNION ALL
    SELECT bola_6 FROM apostas.megasena
) x
GROUP BY numero
ORDER BY ocorrencias DESC;