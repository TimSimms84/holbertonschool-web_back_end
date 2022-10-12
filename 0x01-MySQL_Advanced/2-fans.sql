-- script ranks country origins of fans by number of fans
-- column names must be origin and nb_fans

SELECT origin, COUNT(fans) AS nb_fans
FROM metal_bands
GROUP BY origin
ORDER BY nb_fans DESC;

