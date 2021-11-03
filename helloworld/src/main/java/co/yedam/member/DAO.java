package co.yedam.member;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DAO {
	protected Connection conn;
	protected PreparedStatement psmt;
	protected Statement stmt;
	protected ResultSet rs;
	
	/* Connection : JDBC에서 DB와의 연결을 위해서 사용하는 객체.
	 * 
	 * PreparedStatement vs Statement : Cache 사용 여부에 따른 차이.
	 * stmt = 매번 쿼리를 실행할 때 마다 1. 쿼리문장해석 2. 컴파일 3. 컴파일 결과에 따른 실행.
	 * psmt = 가장 처음 쿼리를 실행할 때만, 1. 쿼리문장해석 2. 컴파일 3. 컴파일 결과에 따른 실행이 진행되고
	 * 그 이후에 실행이 될 때는 캐시메모리에 결과를 담아두고 재사용하는 것이다.
	 * 물론, 이 결과를 그대로 가져오는 것이 아닌, 컴파일 결과를 저장해놓는 것이고 매개변수에 따라 다른 실행을 진행하게 된다.
	 * stmt의 경우는, 완성된 형태의 SQL문을 작성해야 하기 때문에 SQL문의 형태를 한눈에 파악하기 쉽지만, psmt의 경우 ?와 같은
	 * 입력해야 할 값이 들어가기 때문에, SQL문의 형태를 한눈에 파악하기 어렵다.
	 * 하지만, 같은 쿼리를 여러번 반복해야 하는 상황이 온다면, psmt가 매번 컴파일 하지 않아도 되므로 
	 * DB에 훨씬 적은 부하를 주고 성능이 훨씬 좋다.
	 * 
	 * ResultSet : sql문의 결과를 return 받기 위해 사용하는 객체,
	 */
	protected void disconnect() {
		if(rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(psmt != null) {
			try {
				psmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	protected void connect() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String user = "web", pw = "web";
		
		// 1) JDBC 드라이버 로딩
		try {
			Class.forName("oracle.jdbc.OracleDriver");	
			/*  Class.forName("주소값")
			 *  물리적인 클래스 파일명을 인자로 넣어주면, 이에 해당하는 Class를 return.
			 *  JDBC에서, DB와 연결하기 전에 DB에 맞는 Driver를 load해야 하는 과정이 필요하다.
			 *  
			 *  위의 코드를 통해서 Driver를 load시키고 나면, Driver를 통해 연결할 수 있는 객체가
			 *  DriverManger에 내부적으로 등록이 되어지게 되고, 이 후 getConnection() Method과 URL 값들을 이용해서
			 *  DB와 연결하게 된다.
			 */
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		// 2) DB연결(DB url, DB id, DB pw)
		try {
			conn = DriverManager.getConnection(url, user, pw);
			/* DriverManager.getConnection(url, user, pw)
			 * DB와 실제로 연결을 하기 위한 과정.
			 * url와 user, pw를 입력하게 되면, DriverManager에 load되어 있는 DB에 user와 pw를 이용해서 연결되어 진다.
			 */
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
