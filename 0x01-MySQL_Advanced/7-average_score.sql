-- creates stored procedure ComputeAverageScoreForuser that computes the average score for a student

DELIMITER $$
CREATE PROCEDURE ComputeAverageScoreForuser(
	in user_id int
)
BEGIN
	DECLARE avg_score float;
	set avg_score = (SELECT AVG(score) FROM corrections WHERE user_id = user_id);
	UPDATE users SET average_score = avg_score WHERE id = user_id;
END $$
DELIMITER ;
