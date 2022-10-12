-- creates stored procedure ComputeAverageScoreForuser that computes the average score for a student

DELIMITER $$
CREATE PROCEDURE ComputeAverageScoreForuser(
	in user_id int
)
BEGIN
	DECLARE average_score float;
	SELECT AVG(score) INTO average_score FROM corrections WHERE user_id = user_id;
	UPDATE users SET average_score = average_score WHERE id = user_id;
END $$
DELIMITER ;c
