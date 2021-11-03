package co.yedam.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class GetMemberServlet
 */

/* Servlet File
 * Java 플랫폼에서 동적인 Web을 개발에 기반이 되는 기술로써, Web에서 JAVA프로그래밍을 가능케 한다.
 * 사용자의 요청(Request)를 받아 요청한대로 처리해주는(doGet, doPost) 일을 한 후, 처리 결과를 사용자에게 응답(Response)해준다.
 * 기본적으로, HttpServlet Class를 상속받아서 구현되어진다.
 * HttpServlet Class는 Tomcat을 설치하면, 기본적으로 제공되는 Class이며, 이 Class를 통해 확장된 Web Programming이 가능.
 * 즉 ! Java언어를 이용해 Web Program을 개발하는 것이다.
 */

@WebServlet({ "/GetMemberJsonServ" })	
/* @WebServlet({ "주소값" })
 * 위의 괄호안에 들어가는 값을 'URL-Pattern' 이라고 한다.
 * URL-Pattern은 실제 Servlet Mapping 이름을 의미한다.
 * Servlet Mapping시 사용되는 가상의 이름이며 Client가 Browser에게 요청할 때, 반드시 '/'시로 시작한다.
 * 즉, 현재 만들고 있는 /GetMemberJsonServ라는 Servlet파일을 다른 JSP에서 부를 때 사용한다는 것이다.
 * Servlet 파일명과 동일하게 작성하면 된다(?).
 */
public class GetMemberJsonServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
	/*
	 * 
	 */
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetMemberJsonServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    
    /*
     * Client는 Server에 get과 post 중 하나로 요청(Request)을 하게 된다.
     * Get방식 = 주소창을 타고(URL을 통해) 데이터가 넘어가는 방식이다. 데이터를 사용자가 그대로 볼 수 있으므로 보안에 취약하다.
     * 또한, 전송해야 하는 데이터가 매우 많을 때, 주소창의 글자수에 제약이 있기 때문에 정상적으로 넘어가지 않는 경우도 발생할 수 있다.
     * Post방식 = Get방식과 달리, Header를 이용해서 정보가 전송되어서 상대적으로 보안에 강하다.
     * 
     * doGet, doPost Method 모두 매개변수로 request와 response 객체를 하나씩 받아오게 되는데,
     * 여기서 request는 사용자의 요청을, response는 사용자의 요청에 대한 응답을 관리하는 객체들이 된다.
     * 
     */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/json; charset=UTF-8");
		/* response.setContentType을 통해서, 응답 방식을 결정한다.
		 * 위와 같이, text/json; charset=UTF-8은, 데이터를 JSON 데이터 Type으로, 그리고 문자를 UTF-8방식을 이용해서 Encoding 하겠음을 의미한다.
		 * 여기서 주의해야 할 것은, setContentType이 PrintWriter 객체를 선언하기 전에 와야 한다. 그래야 정상적으로 데이터 Type과 인코딩 방식을 결정할 수 있다.
		 * */
		
		PrintWriter out = response.getWriter();
		/* response.getWriter()는 출력 도구용 출력 스트림에 Text를 보내겠다는 뜻이다.
		 * getWriter()는 '쓰기'를 통해 응답하겠다는 Method이다.
		 * 
		 */
		
		// {"name":"HongKilDong", "age":20, "phone":"010-1234-1234"} 이런 형식의 데이터.
		//out.println("{\"name\":\"HongKilDong\", \"age\":20, \"phone\":\"010-1234-1234\"}");
		
		// "[{\"id\":\"?\", \"name\":?, birth:?, gender:?}, {}, {}]";
		// 위와 같은 형태로, JSON Type으로 데이터를 생성할 것이다.
		
		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.getMemberList();
//		int cnt = list.size();
//		out.println("[");
//		for(int i = 0 ; i < cnt; i++) {
//			out.println("{\"id\": \"" + list.get(i).getUserId() 
//					   + "\", \"name\": \"" + list.get(i).getUserName() 
//					   + "\", \"birth\": \"" + list.get(i).getBirthDate().substring(0,10) 
//					   + "\", \"gender\": \"" + list.get(i).getGender()
//					   + "\"}");
//			if(i != cnt - 1) {
//				out.println(",");	
//			}
//		}
//		out.println("]");
		
		Gson gson = new GsonBuilder().create();
		out.println(gson.toJson(list));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		MemDAO dao = new MemDAO();
		String userId = request.getParameter("id");
		String userName = request.getParameter("name");
		String address = request.getParameter("addr");
		
		MemberVO vo = new MemberVO();
		vo.setUserId(userId);
		vo.setUserName(userName);
		vo.setAddress(address);
		
		dao.insertMember(vo);
		response.getWriter().println("OK");
	}

}
