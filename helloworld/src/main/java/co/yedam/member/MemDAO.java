package co.yedam.member;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemDAO extends DAO {
	
	public int deleteMember(String id) {
		String sql = "DELETE FROM member WHERE user_id = ?";
		connect();
		int n = 0;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			n = psmt.executeUpdate();
			System.out.println(n + "건 DELETE 되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return n;
	}
	
	public MemberVO getMember(String id) {
		String sql = "SELECT * FROM member WHERE user_id = ?";
		connect();
		MemberVO vo = null;
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			rs = psmt.executeQuery();
			if(rs.next()) {
				vo = new MemberVO();
				vo.setAddress(rs.getString("address"));
				vo.setBirthDate(rs.getString("birth_date"));
				vo.setGender(rs.getString("gender"));
				vo.setPhone(rs.getString("phone"));
				vo.setUserId(rs.getString("user_id"));
				vo.setUserName(rs.getString("user_name"));
				vo.setUserPw(rs.getString("user_pw"));
			}
		} catch(SQLException e) {
			e.printStackTrace();
			return null;
		} finally {
			disconnect();
		}
		return vo; 
	}
	
	public void insertMember(MemberVO vo) {
		String sql = "INSERT INTO member(user_id, user_name, address) VALUES(?,?,?)";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getUserId());
			psmt.setString(2, vo.getUserName());
			psmt.setString(3, vo.getAddress());
			int r = psmt.executeUpdate();
			System.out.println(r +"건 INSERT 되었습니다.");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}
	
	public List<MemberVO> getMemberList() {
		String sql = "SELECT * FROM member order by 1";
		connect();
		List<MemberVO> memberList = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			//stmt = conn.createStatement();
			//rs = stmt.executeQuery(sql);
			while(rs.next()) {
				MemberVO vo = new MemberVO();
				//vo.set~~(rs.getString("database의 Column명과 동일"));
				vo.setAddress(rs.getString("address"));
				vo.setBirthDate(rs.getString("birth_date"));
				vo.setGender(rs.getString("gender"));
				vo.setPhone(rs.getString("phone"));
				vo.setUserId(rs.getString("user_id"));
				vo.setUserName(rs.getString("user_name"));
				vo.setUserPw(rs.getString("user_pw"));
				memberList.add(vo);
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return memberList;
	}
}
