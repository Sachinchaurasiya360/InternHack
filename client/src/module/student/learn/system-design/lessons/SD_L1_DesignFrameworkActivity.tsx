
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
E
f
f
e
c
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
C
o
m
p
a
s
s
,
 
M
e
s
s
a
g
e
C
i
r
c
l
e
Q
u
e
s
t
i
o
n
,
 
C
a
l
c
u
l
a
t
o
r
,
 
L
a
y
e
r
s
,
 
M
i
c
r
o
s
c
o
p
e
,


 
 
C
h
e
c
k
,
 
X
,
 
P
l
a
y
,
 
P
a
u
s
e
,
 
R
o
t
a
t
e
C
c
w
,
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
 
}
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
S
D
,


 
 
S
D
_
S
O
F
T
,


 
 
M
O
N
O
,


 
 
s
e
c
t
i
o
n
T
i
t
l
e
,


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
,


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


 
 
c
a
r
d
H
o
v
e
r
,


}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




c
o
n
s
t
 
G
O
O
D
 
=
 
"
#
1
0
b
9
8
1
"
;


c
o
n
s
t
 
B
A
D
 
=
 
"
#
f
9
7
3
1
6
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
A
n
i
m
a
t
e
d
 
4
-
s
t
e
p
 
w
h
i
t
e
b
o
a
r
d
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
S
t
e
p
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
n
u
m
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
s
u
b
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
i
c
o
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
m
i
n
u
t
e
s
:
 
s
t
r
i
n
g
;


 
 
w
h
a
t
:
 
s
t
r
i
n
g
;


 
 
e
x
a
m
p
l
e
:
 
s
t
r
i
n
g
;


 
 
m
i
s
t
a
k
e
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
S
T
E
P
S
:
 
S
t
e
p
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
c
l
a
r
i
f
y
"
,


 
 
 
 
n
u
m
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
C
l
a
r
i
f
y
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
W
h
a
t
 
a
r
e
 
w
e
 
a
c
t
u
a
l
l
y
 
b
u
i
l
d
i
n
g
?
"
,


 
 
 
 
i
c
o
n
:
 
<
M
e
s
s
a
g
e
C
i
r
c
l
e
Q
u
e
s
t
i
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
m
i
n
u
t
e
s
:
 
"
5
 
m
i
n
"
,


 
 
 
 
w
h
a
t
:
 
"
P
i
n
 
d
o
w
n
 
s
c
o
p
e
,
 
u
s
e
r
s
,
 
a
n
d
 
t
h
e
 
2
–
3
 
c
o
r
e
 
f
e
a
t
u
r
e
s
.
 
R
e
s
o
l
v
e
 
a
m
b
i
g
u
i
t
y
 
n
o
w
,
 
n
o
t
 
a
t
 
m
i
n
u
t
e
 
3
5
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
\
"
D
e
s
i
g
n
 
T
w
i
t
t
e
r
\
"
 
→
 
W
h
o
 
p
o
s
t
s
?
 
W
h
o
 
r
e
a
d
s
?
 
D
o
 
w
e
 
n
e
e
d
 
D
M
s
?
 
M
e
d
i
a
?
 
F
o
l
l
o
w
 
g
r
a
p
h
?
 
O
n
l
y
 
t
w
e
e
t
s
 
+
 
t
i
m
e
l
i
n
e
 
f
o
r
 
n
o
w
.
"
,


 
 
 
 
m
i
s
t
a
k
e
:
 
"
S
i
l
e
n
t
l
y
 
a
s
s
u
m
i
n
g
 
s
c
o
p
e
.
 
I
n
t
e
r
v
i
e
w
e
r
 
e
x
p
e
c
t
s
 
y
o
u
 
t
o
 
a
s
k
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
e
s
t
i
m
a
t
e
"
,


 
 
 
 
n
u
m
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
E
s
t
i
m
a
t
e
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
H
o
w
 
b
i
g
 
i
s
 
t
h
i
s
,
 
i
n
 
n
u
m
b
e
r
s
?
"
,


 
 
 
 
i
c
o
n
:
 
<
C
a
l
c
u
l
a
t
o
r
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
m
i
n
u
t
e
s
:
 
"
5
 
m
i
n
"
,


 
 
 
 
w
h
a
t
:
 
"
Q
u
i
c
k
 
b
a
c
k
-
o
f
-
e
n
v
e
l
o
p
e
:
 
D
A
U
,
 
Q
P
S
 
r
e
a
d
/
w
r
i
t
e
,
 
s
t
o
r
a
g
e
/
d
a
y
,
 
p
e
a
k
 
v
s
 
a
v
e
r
a
g
e
.
 
T
h
e
s
e
 
n
u
m
b
e
r
s
 
d
r
i
v
e
 
e
v
e
r
y
 
l
a
t
e
r
 
d
e
c
i
s
i
o
n
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
2
0
0
M
 
D
A
U
 
×
 
2
 
t
w
e
e
t
s
/
d
a
y
 
=
 
4
0
0
M
 
w
r
i
t
e
s
/
d
a
y
 
≈
 
5
K
 
w
r
i
t
e
s
/
s
.
 
R
e
a
d
s
 
≈
 
1
0
0
×
 
w
r
i
t
e
s
 
→
 
5
0
0
K
 
r
e
a
d
s
/
s
.
"
,


 
 
 
 
m
i
s
t
a
k
e
:
 
"
P
i
c
k
i
n
g
 
a
 
d
a
t
a
b
a
s
e
 
b
e
f
o
r
e
 
y
o
u
 
k
n
o
w
 
t
h
e
 
r
e
a
d
/
w
r
i
t
e
 
r
a
t
i
o
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
h
i
g
h
"
,


 
 
 
 
n
u
m
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
H
i
g
h
-
L
e
v
e
l
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
D
r
a
w
 
t
h
e
 
b
o
x
e
s
 
a
n
d
 
a
r
r
o
w
s
.
"
,


 
 
 
 
i
c
o
n
:
 
<
L
a
y
e
r
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
m
i
n
u
t
e
s
:
 
"
1
5
 
m
i
n
"
,


 
 
 
 
w
h
a
t
:
 
"
C
l
i
e
n
t
 
→
 
L
B
 
→
 
A
p
p
 
s
e
r
v
e
r
s
 
→
 
D
B
/
C
a
c
h
e
.
 
S
k
e
t
c
h
 
t
h
e
 
m
a
i
n
 
d
a
t
a
 
f
l
o
w
s
.
 
N
a
m
e
 
o
n
e
 
w
r
i
t
e
 
p
a
t
h
,
 
o
n
e
 
r
e
a
d
 
p
a
t
h
.
 
D
o
 
n
o
t
 
o
p
t
i
m
i
z
e
 
y
e
t
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
C
l
i
e
n
t
 
→
 
A
P
I
 
g
a
t
e
w
a
y
 
→
 
T
w
e
e
t
 
s
e
r
v
i
c
e
 
→
 
(
C
a
s
s
a
n
d
r
a
 
f
o
r
 
t
w
e
e
t
s
,
 
R
e
d
i
s
 
f
o
r
 
t
i
m
e
l
i
n
e
s
)
.
 
F
a
n
-
o
u
t
-
o
n
-
w
r
i
t
e
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
?
 
N
o
t
e
 
i
t
,
 
d
e
f
e
r
.
"
,


 
 
 
 
m
i
s
t
a
k
e
:
 
"
S
p
e
n
d
i
n
g
 
2
0
 
m
i
n
u
t
e
s
 
o
n
 
a
 
c
a
c
h
i
n
g
 
l
a
y
e
r
 
b
e
f
o
r
e
 
t
h
e
 
b
a
s
i
c
 
f
l
o
w
 
i
s
 
d
r
a
w
n
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
e
e
p
"
,


 
 
 
 
n
u
m
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
D
e
e
p
-
D
i
v
e
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
Z
o
o
m
 
i
n
t
o
 
t
h
e
 
s
c
a
r
i
e
s
t
 
b
o
x
.
"
,


 
 
 
 
i
c
o
n
:
 
<
M
i
c
r
o
s
c
o
p
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
m
i
n
u
t
e
s
:
 
"
1
5
 
m
i
n
"
,


 
 
 
 
w
h
a
t
:
 
"
I
n
t
e
r
v
i
e
w
e
r
 
p
i
c
k
s
 
o
n
e
 
c
o
m
p
o
n
e
n
t
.
 
T
r
a
d
e
-
o
f
f
s
,
 
f
a
i
l
u
r
e
 
m
o
d
e
s
,
 
s
c
a
l
i
n
g
 
b
o
t
t
l
e
n
e
c
k
s
.
 
N
a
m
e
 
t
h
e
 
a
c
t
u
a
l
 
d
a
t
a
b
a
s
e
/
q
u
e
u
e
.
 
D
i
s
c
u
s
s
 
c
o
n
s
i
s
t
e
n
c
y
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
D
e
e
p
-
d
i
v
e
 
o
n
 
t
i
m
e
l
i
n
e
:
 
f
a
n
-
o
u
t
-
o
n
-
w
r
i
t
e
 
f
o
r
 
n
o
r
m
a
l
 
u
s
e
r
s
,
 
f
a
n
-
o
u
t
-
o
n
-
r
e
a
d
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
 
w
i
t
h
 
>
1
M
 
f
o
l
l
o
w
e
r
s
.
 
J
u
s
t
i
f
y
 
w
i
t
h
 
m
a
t
h
.
"
,


 
 
 
 
m
i
s
t
a
k
e
:
 
"
G
i
v
i
n
g
 
g
e
n
e
r
i
c
 
a
n
s
w
e
r
s
 
(
\
"
w
e
 
c
a
n
 
c
a
c
h
e
 
i
t
\
"
)
 
i
n
s
t
e
a
d
 
o
f
 
n
a
m
i
n
g
 
s
p
e
c
i
f
i
c
s
 
a
n
d
 
t
r
a
d
e
o
f
f
s
.
"
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
F
o
u
r
S
t
e
p
C
a
n
v
a
s
(
)
 
{


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
,
 
s
e
t
A
c
t
i
v
e
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
p
l
a
y
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
A
c
t
i
v
e
(
(
a
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
a
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
)
 
{
 
s
e
t
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;
 
r
e
t
u
r
n
 
a
;
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
a
 
+
 
1
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
2
6
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
)
;


 
 
}
,
 
[
p
l
a
y
i
n
g
,
 
a
c
t
i
v
e
]
)
;




 
 
c
o
n
s
t
 
s
t
e
p
 
=
 
S
T
E
P
S
[
a
c
t
i
v
e
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
4
 
s
t
e
p
s
 
e
v
e
r
y
 
s
e
n
i
o
r
 
e
n
g
i
n
e
e
r
 
r
u
n
s
 
-
 
i
n
 
o
r
d
e
r
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
n
 
H
L
D
 
i
n
t
e
r
v
i
e
w
 
i
s
 
4
5
 
m
i
n
u
t
e
s
.
 
A
 
g
o
o
d
 
c
a
n
d
i
d
a
t
e
 
s
p
e
n
d
s
 
r
o
u
g
h
l
y
 
5
 
→
 
5
 
→
 
1
5
 
→
 
1
5
 
m
i
n
u
t
e
s
 
o
n
 
t
h
e


 
 
 
 
 
 
 
 
f
o
u
r
 
s
t
e
p
s
 
b
e
l
o
w
.
 
S
k
i
p
 
s
t
e
p
 
1
 
a
n
d
 
y
o
u
 
w
i
l
l
 
d
e
s
i
g
n
 
t
h
e
 
w
r
o
n
g
 
t
h
i
n
g
.
 
S
k
i
p
 
s
t
e
p
 
2
 
a
n
d
 
s
t
e
p
 
3
 
i
s


 
 
 
 
 
 
 
 
g
u
e
s
s
i
n
g
.
 
T
h
e
 
o
r
d
e
r
 
i
s
 
n
o
t
 
o
p
t
i
o
n
a
l
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
P
l
a
y
b
a
c
k
 
c
o
n
t
r
o
l
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
s
e
t
A
c
t
i
v
e
(
0
)
;
 
s
e
t
P
l
a
y
i
n
g
(
t
r
u
e
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
p
l
a
y
i
n
g
 
?
 
S
D
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,
 
c
o
l
o
r
:
 
p
l
a
y
i
n
g
 
?
 
"
#
f
f
f
"
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
i
n
g
 
?
 
<
P
a
u
s
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
i
n
g
 
?
 
"
P
l
a
y
i
n
g
…
"
 
:
 
"
P
l
a
y
 
w
a
l
k
t
h
r
o
u
g
h
"
}


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
s
e
t
A
c
t
i
v
e
(
0
)
;
 
s
e
t
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
R
e
s
e
t


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
4
 
s
t
e
p
 
c
h
i
p
s
 
o
n
 
a
 
t
i
m
e
l
i
n
e
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
4
,
 
1
f
r
)
"
,


 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
c
o
n
n
e
c
t
i
n
g
 
l
i
n
e
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
t
o
p
:
 
2
8
,
 
l
e
f
t
:
 
"
1
0
%
"
,
 
r
i
g
h
t
:
 
"
1
0
%
"
,
 
h
e
i
g
h
t
:
 
2
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
z
I
n
d
e
x
:
 
0
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
o
n
e
 
=
 
i
 
<
 
a
c
t
i
v
e
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
u
r
 
=
 
i
 
=
=
=
 
a
c
t
i
v
e
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
s
e
t
A
c
t
i
v
e
(
i
)
;
 
s
e
t
P
l
a
y
i
n
g
(
f
a
l
s
e
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,
 
z
I
n
d
e
x
:
 
1
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
6
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
c
u
r
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
 
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
c
u
r
 
?
 
S
D
_
S
O
F
T
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
2
0
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
6
,
 
h
e
i
g
h
t
:
 
3
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
"
5
0
%
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
d
o
n
e
 
|
|
 
c
u
r
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
d
o
n
e
 
|
|
 
c
u
r
 
?
 
"
#
f
f
f
"
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
d
o
n
e
 
|
|
 
c
u
r
 
?
 
"
n
o
n
e
"
 
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
n
e
 
?
 
<
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
:
 
s
.
n
u
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
c
u
r
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
m
i
n
u
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
A
c
t
i
v
e
 
s
t
e
p
 
d
e
t
a
i
l
 
c
a
r
d
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
e
p
.
i
d
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
4
,
 
s
c
a
l
e
:
 
0
.
9
8
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
,
 
s
c
a
l
e
:
 
0
.
9
8
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
8
0
,
 
d
a
m
p
i
n
g
:
 
2
6
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
2
,
 
h
e
i
g
h
t
:
 
3
2
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
,
 
c
o
l
o
r
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
i
c
o
n
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
T
E
P
 
{
s
t
e
p
.
n
u
m
}
 
·
 
{
s
t
e
p
.
m
i
n
u
t
e
s
.
t
o
U
p
p
e
r
C
a
s
e
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
t
l
e
}
 
-
 
{
s
t
e
p
.
s
u
b
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
4
,
 
m
a
r
g
i
n
T
o
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
H
A
T
 
Y
O
U
 
D
O


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
w
h
a
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
O
N
C
R
E
T
E
 
E
X
A
M
P
L
E


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
e
x
a
m
p
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
2
4
9
,
1
1
5
,
2
2
,
0
.
0
8
)
"
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
B
A
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,
 
g
a
p
:
 
8
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
0
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
B
A
D
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
B
A
D
 
}
}
>
C
l
a
s
s
i
c
 
m
i
s
t
a
k
e
:
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
m
i
s
t
a
k
e
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
G
o
o
d
 
r
u
n
 
v
s
 
B
a
d
 
r
u
n
 
s
i
d
e
-
b
y
-
s
i
d
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
L
i
n
e
 
{


 
 
t
:
 
s
t
r
i
n
g
;
 
 
 
/
/
 
t
i
m
e
s
t
a
m
p
 
e
.
g
.
 
"
0
:
0
2
"


 
 
w
h
o
:
 
"
I
"
 
|
 
"
C
"
;
 
/
/
 
i
n
t
e
r
v
i
e
w
e
r
 
/
 
c
a
n
d
i
d
a
t
e


 
 
t
e
x
t
:
 
s
t
r
i
n
g
;


 
 
t
a
g
?
:
 
s
t
r
i
n
g
;
 
/
/
 
o
p
t
i
o
n
a
l
 
l
a
b
e
l
 
l
i
k
e
 
"
S
t
e
p
 
1
"


 
 
t
a
g
G
o
o
d
?
:
 
b
o
o
l
e
a
n
;


}




c
o
n
s
t
 
G
O
O
D
_
R
U
N
:
 
L
i
n
e
[
]
 
=
 
[


 
 
{
 
t
:
 
"
0
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
D
e
s
i
g
n
 
T
w
i
t
t
e
r
 
f
o
r
 
m
e
.
"
 
}
,


 
 
{
 
t
:
 
"
0
:
3
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
Q
u
i
c
k
 
q
u
e
s
t
i
o
n
s
 
-
 
s
c
o
p
e
 
i
s
 
p
o
s
t
s
 
+
 
h
o
m
e
 
t
i
m
e
l
i
n
e
,
 
n
o
t
 
D
M
s
 
o
r
 
s
e
a
r
c
h
?
 
A
n
d
 
w
e
 
t
a
r
g
e
t
 
m
o
b
i
l
e
 
c
l
i
e
n
t
s
?
"
,
 
t
a
g
:
 
"
S
t
e
p
 
1
"
,
 
t
a
g
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
:
 
"
1
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
C
o
r
r
e
c
t
.
 
2
0
0
M
 
D
A
U
,
 
g
l
o
b
a
l
.
"
 
}
,


 
 
{
 
t
:
 
"
2
:
0
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
O
K
 
-
 
2
0
0
M
 
D
A
U
 
×
 
2
 
p
o
s
t
s
/
d
a
y
 
=
 
4
0
0
M
 
w
r
i
t
e
s
/
d
a
y
 
≈
 
5
K
 
Q
P
S
.
 
R
e
a
d
s
 
d
o
m
i
n
a
t
e
,
 
c
a
l
l
 
i
t
 
5
0
0
K
 
Q
P
S
.
 
2
8
0
 
b
y
t
e
s
/
t
w
e
e
t
 
→
 
~
1
1
5
 
G
B
/
d
a
y
.
"
,
 
t
a
g
:
 
"
S
t
e
p
 
2
"
,
 
t
a
g
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
:
 
"
8
:
0
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
H
i
g
h
-
l
e
v
e
l
:
 
c
l
i
e
n
t
 
→
 
L
B
 
→
 
A
P
I
 
g
a
t
e
w
a
y
 
→
 
t
w
e
e
t
 
s
e
r
v
i
c
e
 
→
 
C
a
s
s
a
n
d
r
a
 
(
w
r
i
t
e
s
)
 
+
 
R
e
d
i
s
 
(
t
i
m
e
l
i
n
e
s
)
.
 
F
a
n
-
o
u
t
-
o
n
-
w
r
i
t
e
 
f
o
r
 
n
o
r
m
a
l
 
u
s
e
r
s
.
"
,
 
t
a
g
:
 
"
S
t
e
p
 
3
"
,
 
t
a
g
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
:
 
"
1
8
:
0
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
T
h
a
t
'
s
 
t
h
e
 
f
u
l
l
 
r
e
a
d
 
a
n
d
 
w
r
i
t
e
 
p
a
t
h
 
e
n
d
-
t
o
-
e
n
d
.
 
I
'
m
 
g
o
i
n
g
 
t
o
 
p
a
u
s
e
 
-
 
a
n
y
 
c
o
m
p
o
n
e
n
t
 
y
o
u
'
d
 
l
i
k
e
 
m
e
 
t
o
 
g
o
 
d
e
e
p
 
o
n
?
"
,
 
t
a
g
:
 
"
h
a
n
d
-
o
f
f
"
,
 
t
a
g
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
:
 
"
2
2
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
W
h
a
t
 
h
a
p
p
e
n
s
 
w
i
t
h
 
a
 
u
s
e
r
 
w
h
o
 
h
a
s
 
1
0
M
 
f
o
l
l
o
w
e
r
s
?
"
 
}
,


 
 
{
 
t
:
 
"
2
2
:
1
5
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
G
o
o
d
 
c
a
t
c
h
 
-
 
f
a
n
-
o
u
t
-
o
n
-
w
r
i
t
e
 
b
l
o
w
s
 
u
p
.
 
I
'
d
 
s
w
i
t
c
h
 
t
o
 
f
a
n
-
o
u
t
-
o
n
-
r
e
a
d
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
 
a
b
o
v
e
 
1
M
 
f
o
l
l
o
w
e
r
s
.
 
T
r
a
d
e
o
f
f
:
 
s
l
o
w
e
r
 
r
e
a
d
s
 
f
o
r
 
t
h
o
s
e
,
 
s
a
v
e
s
 
9
9
%
 
o
f
 
t
h
e
 
w
r
i
t
e
 
s
t
o
r
m
.
"
,
 
t
a
g
:
 
"
S
t
e
p
 
4
"
,
 
t
a
g
G
o
o
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
:
 
"
4
0
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
G
r
e
a
t
 
w
a
l
k
t
h
r
o
u
g
h
.
"
 
}
,


]
;




c
o
n
s
t
 
B
A
D
_
R
U
N
:
 
L
i
n
e
[
]
 
=
 
[


 
 
{
 
t
:
 
"
0
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
D
e
s
i
g
n
 
T
w
i
t
t
e
r
 
f
o
r
 
m
e
.
"
 
}
,


 
 
{
 
t
:
 
"
0
:
0
5
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
O
K
 
s
o
 
w
e
'
l
l
 
u
s
e
 
M
o
n
g
o
D
B
 
a
n
d
 
a
d
d
 
R
e
d
i
s
 
c
a
c
h
i
n
g
.
"
 
}
,


 
 
{
 
t
:
 
"
0
:
1
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
…
w
h
y
 
M
o
n
g
o
D
B
?
"
,
 
t
a
g
G
o
o
d
:
 
f
a
l
s
e
 
}
,


 
 
{
 
t
:
 
"
0
:
1
5
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
I
t
 
s
c
a
l
e
s
 
w
e
l
l
.
 
L
e
t
 
m
e
 
d
r
a
w
 
t
h
e
 
m
i
c
r
o
s
e
r
v
i
c
e
s
.
"
 
}
,


 
 
{
 
t
:
 
"
5
:
0
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
W
e
 
h
a
v
e
 
1
2
 
s
e
r
v
i
c
e
s
:
 
a
u
t
h
,
 
t
w
e
e
t
,
 
t
i
m
e
l
i
n
e
,
 
f
o
l
l
o
w
,
 
n
o
t
i
f
i
c
a
t
i
o
n
…
"
,
 
t
a
g
:
 
"
n
o
 
e
s
t
i
m
a
t
e
s
 
y
e
t
"
,
 
t
a
g
G
o
o
d
:
 
f
a
l
s
e
 
}
,


 
 
{
 
t
:
 
"
1
5
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
H
o
w
 
m
a
n
y
 
w
r
i
t
e
s
 
p
e
r
 
s
e
c
o
n
d
?
"
 
}
,


 
 
{
 
t
:
 
"
1
5
:
1
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
U
h
…
 
a
 
l
o
t
?
 
M
a
y
b
e
 
a
 
m
i
l
l
i
o
n
?
"
,
 
t
a
g
G
o
o
d
:
 
f
a
l
s
e
 
}
,


 
 
{
 
t
:
 
"
2
5
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
W
h
a
t
 
a
b
o
u
t
 
c
e
l
e
b
r
i
t
y
 
u
s
e
r
s
 
w
i
t
h
 
1
0
M
 
f
o
l
l
o
w
e
r
s
?
"
 
}
,


 
 
{
 
t
:
 
"
2
5
:
2
0
"
,
 
w
h
o
:
 
"
C
"
,
 
t
e
x
t
:
 
"
W
e
 
c
a
n
 
a
d
d
 
m
o
r
e
 
c
a
c
h
i
n
g
.
"
,
 
t
a
g
:
 
"
n
o
 
t
r
a
d
e
o
f
f
"
,
 
t
a
g
G
o
o
d
:
 
f
a
l
s
e
 
}
,


 
 
{
 
t
:
 
"
4
0
:
0
0
"
,
 
w
h
o
:
 
"
I
"
,
 
t
e
x
t
:
 
"
…
W
e
'
r
e
 
o
u
t
 
o
f
 
t
i
m
e
.
"
 
}
,


]
;




f
u
n
c
t
i
o
n
 
T
r
a
n
s
c
r
i
p
t
(
{
 
l
i
n
e
s
,
 
c
o
l
o
r
,
 
l
a
b
e
l
 
}
:
 
{
 
l
i
n
e
s
:
 
L
i
n
e
[
]
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
m
i
n
H
e
i
g
h
t
:
 
4
8
0
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
1
5
`
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
,
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
4
p
x
 
1
6
p
x
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
{
l
i
n
e
s
.
m
a
p
(
(
l
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
8
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,
 
p
a
d
d
i
n
g
T
o
p
:
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
l
.
w
h
o
 
=
=
=
 
"
C
"
 
?
 
`
$
{
c
o
l
o
r
}
1
0
`
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
l
.
w
h
o
 
=
=
=
 
"
C
"
 
?
 
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
3
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
w
h
o
 
=
=
=
 
"
I
"
 
?
 
"
I
N
T
E
R
V
I
E
W
E
R
"
 
:
 
"
C
A
N
D
I
D
A
T
E
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
t
e
x
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
t
a
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
4
,
 
d
i
s
p
l
a
y
:
 
"
i
n
l
i
n
e
-
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
9
9
9
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
l
.
t
a
g
G
o
o
d
 
?
 
`
$
{
G
O
O
D
}
1
5
`
 
:
 
`
$
{
B
A
D
}
1
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
l
.
t
a
g
G
o
o
d
 
?
 
G
O
O
D
 
:
 
B
A
D
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
5
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
t
a
g
G
o
o
d
 
?
 
<
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
:
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
G
o
o
d
V
s
B
a
d
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
S
a
m
e
 
q
u
e
s
t
i
o
n
.
 
T
w
o
 
v
e
r
y
 
d
i
f
f
e
r
e
n
t
 
4
0
 
m
i
n
u
t
e
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
B
o
t
h
 
c
a
n
d
i
d
a
t
e
s
 
g
o
t
 
&
l
d
q
u
o
;
D
e
s
i
g
n
 
T
w
i
t
t
e
r
.
&
r
d
q
u
o
;
 
T
h
e
 
g
o
o
d
 
o
n
e
 
h
i
t
 
a
l
l
 
f
o
u
r
 
s
t
e
p
s
.
 
T
h
e
 
b
a
d
 
o
n
e


 
 
 
 
 
 
 
 
j
u
m
p
e
d
 
s
t
r
a
i
g
h
t
 
t
o
 
t
e
c
h
n
o
l
o
g
y
 
n
a
m
e
s
.
 
R
e
a
d
 
b
o
t
h
 
t
r
a
n
s
c
r
i
p
t
s
 
-
 
n
o
t
i
c
e
 
w
h
e
r
e
 
t
i
m
e
 
w
a
s
 
s
p
e
n
t
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
<
T
r
a
n
s
c
r
i
p
t
 
l
i
n
e
s
=
{
G
O
O
D
_
R
U
N
}
 
c
o
l
o
r
=
{
G
O
O
D
}
 
l
a
b
e
l
=
"
G
O
O
D
 
R
U
N
 
·
 
O
F
F
E
R
"
 
/
>


 
 
 
 
 
 
 
 
<
T
r
a
n
s
c
r
i
p
t
 
l
i
n
e
s
=
{
B
A
D
_
R
U
N
}
 
c
o
l
o
r
=
{
B
A
D
}
 
l
a
b
e
l
=
"
B
A
D
 
R
U
N
 
·
 
N
O
 
O
F
F
E
R
"
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
8
,
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
D
I
F
F
E
R
E
N
C
E


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
g
o
o
d
 
c
a
n
d
i
d
a
t
e
 
s
a
i
d
 
<
b
>
n
o
 
t
e
c
h
n
o
l
o
g
y
 
n
a
m
e
s
<
/
b
>
 
f
o
r
 
t
h
e
 
f
i
r
s
t
 
2
 
m
i
n
u
t
e
s
.
 
S
c
o
p
e
 
f
i
r
s
t
,


 
 
 
 
 
 
 
 
 
 
n
u
m
b
e
r
s
 
s
e
c
o
n
d
.
 
T
h
e
 
b
a
d
 
c
a
n
d
i
d
a
t
e
 
n
a
m
e
d
 
M
o
n
g
o
D
B
 
i
n
 
l
i
n
e
 
2
 
-
 
b
e
f
o
r
e
 
t
h
e
y
 
k
n
e
w
 
i
f
 
r
e
a
d
s
 
o
r


 
 
 
 
 
 
 
 
 
 
w
r
i
t
e
s
 
d
o
m
i
n
a
t
e
d
.
 
F
r
a
m
e
w
o
r
k
 
i
s
n
&
r
s
q
u
o
;
t
 
b
u
r
e
a
u
c
r
a
c
y
.
 
I
t
&
r
s
q
u
o
;
s
 
h
o
w
 
y
o
u
 
<
e
m
>
a
v
o
i
d
<
/
e
m
>
 
d
e
s
i
g
n
i
n
g


 
 
 
 
 
 
 
 
 
 
t
h
e
 
w
r
o
n
g
 
t
h
i
n
g
.


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
C
h
e
a
t
 
s
h
e
e
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
C
h
e
a
t
S
h
e
e
t
(
)
 
{


 
 
c
o
n
s
t
 
r
u
l
e
s
 
=
 
[


 
 
 
 
{
 
n
:
 
1
,
 
t
e
x
t
:
 
"
N
e
v
e
r
 
n
a
m
e
 
a
 
d
a
t
a
b
a
s
e
 
i
n
 
t
h
e
 
f
i
r
s
t
 
5
 
m
i
n
u
t
e
s
.
"
,
 
w
h
y
:
 
"
Y
o
u
 
h
a
v
e
n
'
t
 
e
a
r
n
e
d
 
t
h
e
 
r
i
g
h
t
 
t
o
 
p
i
c
k
 
o
n
e
 
y
e
t
.
"
 
}
,


 
 
 
 
{
 
n
:
 
2
,
 
t
e
x
t
:
 
"
A
l
w
a
y
s
 
w
r
i
t
e
 
D
A
U
,
 
Q
P
S
,
 
a
n
d
 
s
t
o
r
a
g
e
 
o
n
 
t
h
e
 
b
o
a
r
d
.
"
,
 
w
h
y
:
 
"
T
h
e
s
e
 
t
h
r
e
e
 
n
u
m
b
e
r
s
 
c
o
n
s
t
r
a
i
n
 
e
v
e
r
y
 
l
a
t
e
r
 
c
h
o
i
c
e
.
"
 
}
,


 
 
 
 
{
 
n
:
 
3
,
 
t
e
x
t
:
 
"
D
r
a
w
 
o
n
e
 
w
r
i
t
e
 
p
a
t
h
 
a
n
d
 
o
n
e
 
r
e
a
d
 
p
a
t
h
 
-
 
s
e
p
a
r
a
t
e
l
y
.
"
,
 
w
h
y
:
 
"
R
e
a
d
s
 
a
n
d
 
w
r
i
t
e
s
 
u
s
u
a
l
l
y
 
h
a
v
e
 
d
i
f
f
e
r
e
n
t
 
b
o
t
t
l
e
n
e
c
k
s
.
"
 
}
,


 
 
 
 
{
 
n
:
 
4
,
 
t
e
x
t
:
 
"
D
e
f
e
r
 
o
p
t
i
m
i
z
a
t
i
o
n
s
.
 
S
a
y
:
 
'
I
'
l
l
 
c
o
m
e
 
b
a
c
k
 
t
o
 
t
h
i
s
.
'
"
,
 
w
h
y
:
 
"
G
e
t
t
i
n
g
 
a
 
b
a
s
i
c
 
w
o
r
k
i
n
g
 
d
e
s
i
g
n
 
b
e
a
t
s
 
a
 
h
a
l
f
-
f
i
n
i
s
h
e
d
 
f
a
n
c
y
 
o
n
e
.
"
 
}
,


 
 
 
 
{
 
n
:
 
5
,
 
t
e
x
t
:
 
"
W
h
e
n
 
s
t
u
c
k
 
i
n
 
d
e
e
p
-
d
i
v
e
,
 
n
a
m
e
 
t
h
e
 
t
r
a
d
e
o
f
f
 
o
u
t
 
l
o
u
d
.
"
,
 
w
h
y
:
 
"
S
e
n
i
o
r
 
e
n
g
i
n
e
e
r
s
 
a
r
e
 
j
u
d
g
e
d
 
o
n
 
t
r
a
d
e
o
f
f
 
r
e
a
s
o
n
i
n
g
,
 
n
o
t
 
a
n
s
w
e
r
s
.
"
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
5
 
r
u
l
e
s
 
y
o
u
 
s
a
y
 
o
u
t
 
l
o
u
d
 
i
n
 
t
h
e
 
i
n
t
e
r
v
i
e
w
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
P
r
i
n
t
 
t
h
i
s
.
 
M
e
m
o
r
i
z
e
 
i
t
.
 
T
h
e
s
e
 
a
r
e
 
t
h
e
 
e
x
a
c
t
 
p
h
r
a
s
e
s
 
t
h
a
t
 
s
e
p
a
r
a
t
e
 
a
 
j
u
n
i
o
r
 
r
u
n
 
f
r
o
m
 
a
 
s
e
n
i
o
r


 
 
 
 
 
 
 
 
r
u
n
.
 
U
s
e
 
t
h
e
m
 
v
e
r
b
a
t
i
m
 
i
n
 
y
o
u
r
 
n
e
x
t
 
m
o
c
k
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
2
2
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
r
u
l
e
s
.
m
a
p
(
(
r
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
.
n
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
2
,
 
h
e
i
g
h
t
:
 
3
2
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
"
5
0
%
"
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
,
 
c
o
l
o
r
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
n
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
t
e
x
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
W
H
Y
 
·
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
w
h
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
T
i
m
e
 
b
u
d
g
e
t
 
t
a
b
l
e
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
c
o
l
o
r
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
T
I
M
E
 
B
U
D
G
E
T
 
·
 
A
 
T
Y
P
I
C
A
L
 
4
5
-
M
I
N
 
H
L
D
 
R
O
U
N
D


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
c
t
 
=
 
s
.
i
d
 
=
=
=
 
"
h
i
g
h
"
 
|
|
 
s
.
i
d
 
=
=
=
 
"
d
e
e
p
"
 
?
 
3
3
.
3
 
:
 
1
1
.
1
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
4
0
p
x
 
1
f
r
 
8
0
p
x
 
1
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
2
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
n
u
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
m
i
n
u
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
8
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
c
t
 
*
 
2
.
5
}
%
`
,
 
h
e
i
g
h
t
:
 
"
1
0
0
%
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
M
A
I
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
S
D
_
L
1
_
D
e
s
i
g
n
F
r
a
m
e
w
o
r
k
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
s
t
e
p
s
"
,
 
l
a
b
e
l
:
 
"
T
h
e
 
4
 
S
t
e
p
s
"
,
 
i
c
o
n
:
 
<
C
o
m
p
a
s
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
F
o
u
r
S
t
e
p
C
a
n
v
a
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
o
m
p
a
r
e
"
,
 
l
a
b
e
l
:
 
"
G
o
o
d
 
v
s
 
B
a
d
 
R
u
n
"
,
 
i
c
o
n
:
 
<
L
a
y
e
r
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
G
o
o
d
V
s
B
a
d
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
h
e
a
t
"
,
 
l
a
b
e
l
:
 
"
C
h
e
a
t
 
S
h
e
e
t
"
,
 
i
c
o
n
:
 
<
M
i
c
r
o
s
c
o
p
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
C
h
e
a
t
S
h
e
e
t
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
Y
o
u
 
h
a
v
e
 
4
5
 
m
i
n
u
t
e
s
.
 
R
o
u
g
h
l
y
 
h
o
w
 
l
o
n
g
 
s
h
o
u
l
d
 
y
o
u
 
s
p
e
n
d
 
o
n
 
c
l
a
r
i
f
y
i
n
g
 
s
c
o
p
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
0
 
m
i
n
u
t
e
s
 
-
 
d
i
v
e
 
i
n
.
"
,
 
"
A
b
o
u
t
 
5
 
m
i
n
u
t
e
s
.
"
,
 
"
1
5
 
m
i
n
u
t
e
s
.
"
,
 
"
H
a
l
f
 
t
h
e
 
i
n
t
e
r
v
i
e
w
.
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
l
a
r
i
f
y
 
i
s
 
s
h
o
r
t
 
b
u
t
 
n
o
n
-
n
e
g
o
t
i
a
b
l
e
 
-
 
a
r
o
u
n
d
 
5
 
m
i
n
u
t
e
s
.
 
L
o
n
g
 
e
n
o
u
g
h
 
t
o
 
p
i
n
 
s
c
o
p
e
,
 
s
h
o
r
t
 
e
n
o
u
g
h
 
t
o
 
l
e
a
v
e
 
t
i
m
e
 
f
o
r
 
d
e
s
i
g
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
s
t
e
p
 
i
m
m
e
d
i
a
t
e
l
y
 
f
o
l
l
o
w
s
 
C
l
a
r
i
f
y
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
D
e
e
p
-
D
i
v
e
"
,
 
"
H
i
g
h
-
L
e
v
e
l
 
D
e
s
i
g
n
"
,
 
"
E
s
t
i
m
a
t
e
 
(
b
a
c
k
-
o
f
-
e
n
v
e
l
o
p
e
)
"
,
 
"
P
i
c
k
 
a
 
d
a
t
a
b
a
s
e
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
s
t
i
m
a
t
e
 
c
o
m
e
s
 
s
e
c
o
n
d
.
 
N
u
m
b
e
r
s
 
c
o
n
s
t
r
a
i
n
 
a
r
c
h
i
t
e
c
t
u
r
e
 
-
 
p
i
c
k
i
n
g
 
t
e
c
h
 
b
e
f
o
r
e
 
e
s
t
i
m
a
t
i
n
g
 
i
s
 
b
a
c
k
w
a
r
d
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
c
a
n
d
i
d
a
t
e
 
s
a
y
s
 
&
l
d
q
u
o
;
W
e
'
l
l
 
u
s
e
 
M
o
n
g
o
D
B
 
a
n
d
 
R
e
d
i
s
&
r
d
q
u
o
;
 
i
n
 
t
h
e
 
f
i
r
s
t
 
3
0
 
s
e
c
o
n
d
s
.
 
W
h
a
t
&
r
s
q
u
o
;
s
 
w
r
o
n
g
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
M
o
n
g
o
D
B
 
i
s
 
a
 
b
a
d
 
c
h
o
i
c
e
 
h
e
r
e
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
n
a
m
e
d
 
t
e
c
h
 
b
e
f
o
r
e
 
c
l
a
r
i
f
y
i
n
g
 
s
c
o
p
e
 
o
r
 
e
s
t
i
m
a
t
i
n
g
 
l
o
a
d
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
s
h
o
u
l
d
 
h
a
v
e
 
s
a
i
d
 
P
o
s
t
g
r
e
S
Q
L
.
"
,


 
 
 
 
 
 
 
 
"
N
o
t
h
i
n
g
 
-
 
t
h
a
t
'
s
 
d
e
c
i
s
i
v
e
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
e
c
h
 
c
h
o
i
c
e
 
w
i
t
h
o
u
t
 
s
c
o
p
e
 
o
r
 
n
u
m
b
e
r
s
 
i
s
 
g
u
e
s
s
i
n
g
.
 
Y
o
u
 
h
a
v
e
n
'
t
 
e
a
r
n
e
d
 
t
h
e
 
r
i
g
h
t
 
t
o
 
p
i
c
k
 
a
 
D
B
 
y
e
t
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
D
e
e
p
-
D
i
v
e
,
 
t
h
e
 
i
n
t
e
r
v
i
e
w
e
r
 
a
s
k
s
 
a
b
o
u
t
 
c
e
l
e
b
r
i
t
y
 
u
s
e
r
s
 
w
i
t
h
 
1
0
M
 
f
o
l
l
o
w
e
r
s
.
 
B
e
s
t
 
r
e
s
p
o
n
s
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
&
l
d
q
u
o
;
W
e
'
l
l
 
j
u
s
t
 
a
d
d
 
m
o
r
e
 
c
a
c
h
i
n
g
.
&
r
d
q
u
o
;
"
,


 
 
 
 
 
 
 
 
"
&
l
d
q
u
o
;
L
e
t
&
r
s
q
u
o
;
s
 
m
i
g
r
a
t
e
 
t
o
 
G
r
a
p
h
Q
L
.
&
r
d
q
u
o
;
"
,


 
 
 
 
 
 
 
 
"
N
a
m
e
 
t
h
e
 
t
r
a
d
e
o
f
f
:
 
f
a
n
-
o
u
t
-
o
n
-
w
r
i
t
e
 
b
r
e
a
k
s
;
 
s
w
i
t
c
h
 
t
o
 
f
a
n
-
o
u
t
-
o
n
-
r
e
a
d
 
f
o
r
 
>
1
M
 
f
o
l
l
o
w
e
r
s
,
 
a
c
c
e
p
t
i
n
g
 
s
l
o
w
e
r
 
r
e
a
d
s
.
"
,


 
 
 
 
 
 
 
 
"
&
l
d
q
u
o
;
G
o
o
d
 
q
u
e
s
t
i
o
n
,
 
m
o
v
i
n
g
 
o
n
.
&
r
d
q
u
o
;
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
e
n
i
o
r
-
l
e
v
e
l
 
a
n
s
w
e
r
s
 
n
a
m
e
 
t
h
e
 
t
r
a
d
e
o
f
f
 
a
n
d
 
t
h
e
 
t
h
r
e
s
h
o
l
d
.
 
G
e
n
e
r
i
c
 
a
n
s
w
e
r
s
 
(
&
l
d
q
u
o
;
a
d
d
 
c
a
c
h
i
n
g
&
r
d
q
u
o
;
)
 
a
r
e
 
t
h
e
 
#
1
 
r
e
a
s
o
n
 
p
e
o
p
l
e
 
f
a
i
l
 
t
h
e
 
d
e
e
p
-
d
i
v
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
i
s
 
E
s
t
i
m
a
t
e
 
b
e
f
o
r
e
 
H
i
g
h
-
L
e
v
e
l
,
 
n
o
t
 
a
f
t
e
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
I
t
 
l
o
o
k
s
 
m
o
r
e
 
i
m
p
r
e
s
s
i
v
e
.
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
t
h
e
 
n
u
m
b
e
r
s
 
(
Q
P
S
,
 
s
t
o
r
a
g
e
,
 
r
e
a
d
/
w
r
i
t
e
 
r
a
t
i
o
)
 
d
e
c
i
d
e
 
w
h
a
t
 
a
r
c
h
i
t
e
c
t
u
r
e
 
i
s
 
e
v
e
n
 
v
i
a
b
l
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
w
a
s
t
e
s
 
t
i
m
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
d
o
e
s
n
'
t
 
m
a
t
t
e
r
 
-
 
o
r
d
e
r
 
i
s
 
f
l
e
x
i
b
l
e
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
5
K
 
v
s
 
5
M
 
Q
P
S
 
a
r
e
 
e
n
t
i
r
e
l
y
 
d
i
f
f
e
r
e
n
t
 
a
r
c
h
i
t
e
c
t
u
r
e
s
.
 
W
i
t
h
o
u
t
 
t
h
e
 
n
u
m
b
e
r
,
 
y
o
u
'
r
e
 
d
r
a
w
i
n
g
 
a
 
r
a
n
d
o
m
 
d
i
a
g
r
a
m
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
T
h
e
 
4
-
S
t
e
p
 
D
e
s
i
g
n
 
F
r
a
m
e
w
o
r
k
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
l
i
t
e
r
a
l
 
s
t
r
u
c
t
u
r
e
 
o
f
 
a
 
4
5
-
m
i
n
 
H
L
D
 
r
o
u
n
d
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


