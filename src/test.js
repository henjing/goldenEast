import Mock from 'mockjs';

Mock.mock('/api/index.php/register_active',{
	"current_total_rigister|1000-2000": 0,
	"current_total_active|500-1000": 0,
	"last_total_rigister|1000-2000": 0,
	"last_total_active|500-1000": 0,
	"list|10-30": {
		"jujian_number|100000000-109999999": 0,
		"jujian_name|": '',
		"current_rigister|100-1000": 0,
		"current_active|100-1000": 0,
		"last_rigister|100-1000": 0,
		"last_active|100-1000": 0,
	}
});
