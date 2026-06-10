
i
m
p
o
r
t
 
{
 
s
t
a
r
t
T
r
a
n
s
i
t
i
o
n
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
,
 
u
s
e
S
t
a
t
e
 
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
h
e
v
r
o
n
D
o
w
n
,
 
C
h
e
v
r
o
n
R
i
g
h
t
,
 
L
i
g
h
t
b
u
l
b
 
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
 
{
Q
U
E
S
T
I
O
N
S
}
 
f
r
o
m
 
"
.
/
q
u
e
s
t
i
o
n
s
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
Q
u
e
s
t
i
o
n
s
"
;




c
o
n
s
t
 
D
I
F
F
I
C
U
L
T
Y
_
S
T
Y
L
E
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
E
a
s
y
:
 
"
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
b
o
r
d
e
r
-
l
i
m
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
l
i
m
e
-
7
0
0
"
,


 
 
M
e
d
i
u
m
:
 
"
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
a
m
b
e
r
-
7
0
0
"
,


 
 
H
a
r
d
:
 
"
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
7
0
0
"
,


}
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
S
T
Y
L
E
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
D
S
A
:
 
"
b
g
-
v
i
o
l
e
t
-
5
0
 
d
a
r
k
:
b
g
-
v
i
o
l
e
t
-
9
0
0
/
2
0
 
t
e
x
t
-
v
i
o
l
e
t
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
v
i
o
l
e
t
-
4
0
0
"
,


 
 
B
e
h
a
v
i
o
r
a
l
:
 
"
b
g
-
b
l
u
e
-
5
0
 
d
a
r
k
:
b
g
-
b
l
u
e
-
9
0
0
/
2
0
 
t
e
x
t
-
b
l
u
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
b
l
u
e
-
4
0
0
"
,


 
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
"
:
 
"
b
g
-
o
r
a
n
g
e
-
5
0
 
d
a
r
k
:
b
g
-
o
r
a
n
g
e
-
9
0
0
/
2
0
 
t
e
x
t
-
o
r
a
n
g
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
o
r
a
n
g
e
-
4
0
0
"
,


 
 
H
R
:
 
"
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
,


 
 
F
r
o
n
t
e
n
d
:
 
"
b
g
-
c
y
a
n
-
5
0
 
d
a
r
k
:
b
g
-
c
y
a
n
-
9
0
0
/
2
0
 
t
e
x
t
-
c
y
a
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
c
y
a
n
-
4
0
0
"
,


 
 
B
a
c
k
e
n
d
:
 
"
b
g
-
e
m
e
r
a
l
d
-
5
0
 
d
a
r
k
:
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
2
0
 
t
e
x
t
-
e
m
e
r
a
l
d
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
"
,


}
;




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
 
D
a
i
l
y
I
n
t
e
r
v
i
e
w
T
i
p
W
i
d
g
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
 
[
e
x
p
a
n
d
e
d
,
 
s
e
t
E
x
p
a
n
d
e
d
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


 
 
c
o
n
s
t
 
[
c
a
t
e
g
o
r
y
F
i
l
t
e
r
,
 
s
e
t
C
a
t
e
g
o
r
y
F
i
l
t
e
r
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
"
A
l
l
"
)
;


 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
 
=


 
 
 
 
c
a
t
e
g
o
r
y
F
i
l
t
e
r
 
=
=
=
 
"
A
l
l
"


 
 
 
 
?
 
Q
U
E
S
T
I
O
N
S


 
 
 
 
:
 
Q
U
E
S
T
I
O
N
S
.
f
i
l
t
e
r
(
q
 
=
>
 
q
.
c
a
t
e
g
o
r
y
 
=
=
=
 
c
a
t
e
g
o
r
y
F
i
l
t
e
r
)
;


 
 
c
o
n
s
t
 
[
c
u
r
r
e
n
t
I
n
d
e
x
,
 
s
e
t
C
u
r
r
e
n
t
I
n
d
e
x
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
f
o
c
u
s
M
o
d
e
,
 
s
e
t
F
o
c
u
s
M
o
d
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
f
a
l
s
e
)
;




 
 
c
o
n
s
t
 
s
a
f
e
I
n
d
e
x
 
=
 
c
u
r
r
e
n
t
I
n
d
e
x
 
>
=
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
?
 
0
 
:
 
c
u
r
r
e
n
t
I
n
d
e
x
;


 
 
c
o
n
s
t
 
q
 
=
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
[
s
a
f
e
I
n
d
e
x
]
;




 
 
c
o
n
s
t
 
C
A
T
E
G
O
R
I
E
S
 
=
 
[


 
 
 
 
"
A
l
l
"
,


 
 
 
 
"
D
S
A
"
,


 
 
 
 
"
F
r
o
n
t
e
n
d
"
,


 
 
 
 
"
B
a
c
k
e
n
d
"
,


 
 
 
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
"
,


 
 
 
 
"
H
R
"
,


 
 
 
 
"
B
e
h
a
v
i
o
r
a
l
"
,


 
 
]
 
a
s
 
c
o
n
s
t
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
N
a
v
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
;




 
 
 
 
l
e
t
 
n
e
x
t
;




 
 
 
 
d
o
 
{


 
 
 
 
 
 
n
e
x
t
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
)
;


 
 
 
 
}
 
w
h
i
l
e
 
(
n
e
x
t
 
=
=
=
 
c
u
r
r
e
n
t
I
n
d
e
x
 
&
&
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
>
 
1
)
;




 
 
 
 
s
e
t
C
u
r
r
e
n
t
I
n
d
e
x
(
n
e
x
t
)
;


 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
(
f
a
l
s
e
)
;


 
 
}
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
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
;




 
 
 
 
s
t
a
r
t
T
r
a
n
s
i
t
i
o
n
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
I
n
d
e
x
(
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
)
)
;


 
 
 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
(
f
a
l
s
e
)
;


 
 
 
 
}
)
;


 
 
}
,
 
[
c
a
t
e
g
o
r
y
F
i
l
t
e
r
,
 
f
i
l
t
e
r
e
d
Q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
]
)
;




 
 
r
e
t
u
r
n
 
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
2
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
,


 
 
 
 
 
 
 
 
f
i
l
t
e
r
:
 
f
o
c
u
s
M
o
d
e
 
?
 
"
b
r
i
g
h
t
n
e
s
s
(
1
.
0
5
)
"
 
:
 
"
b
r
i
g
h
t
n
e
s
s
(
1
)
"


 
 
 
 
 
 
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
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
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
m
b
-
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
b
a
r
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
8
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
/
4
0
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
L
i
g
h
t
b
u
l
b
 
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
 
t
e
x
t
-
l
i
m
e
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
D
a
i
l
y
 
I
n
t
e
r
v
i
e
w
 
T
i
p


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
0
.
5
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
{
 
s
c
a
l
e
:
 
1
.
0
5
 
}
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
 
s
e
t
F
o
c
u
s
M
o
d
e
(
v
 
=
>
 
!
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
1
0
p
x
]
 
m
x
-
1
 
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
 
b
o
r
d
e
r
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
7
0
0
 
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
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
c
u
s
M
o
d
e
 
?
 
"
F
o
c
u
s
 
M
o
d
e
 
O
N
"
 
:
 
"
F
o
c
u
s
 
M
o
d
e
"
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


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
N
a
v
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
e
x
t
 
q
u
e
s
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
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
p
-
1
 
m
x
-
1
 
r
o
u
n
d
e
d
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
2
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
 
b
g
-
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


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
t
 
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


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
B
o
d
y
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
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
p
x
-
4
 
p
y
-
4
"
>


 
 
 
 
 
 
 
 
{
/
*
 
C
a
t
e
g
o
r
y
 
+
 
d
i
f
f
i
c
u
l
t
y
 
*
/
}


 
 
 
 
 
 
 
 
{
!
f
o
c
u
s
M
o
d
e
 
&
&


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
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
{
`
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
b
o
l
d
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
s
m
 
$
{
C
A
T
E
G
O
R
Y
_
S
T
Y
L
E
[
q
.
c
a
t
e
g
o
r
y
]
 
?
?
 
C
A
T
E
G
O
R
Y
_
S
T
Y
L
E
[
"
H
R
"
]
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
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
{
`
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
b
o
r
d
e
r
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
s
m
 
$
{
D
I
F
F
I
C
U
L
T
Y
_
S
T
Y
L
E
[
q
.
d
i
f
f
i
c
u
l
t
y
]
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
d
i
f
f
i
c
u
l
t
y
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>
}




 
 
 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
 
B
a
r
 
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
>


 
 
 
 
 
 
 
 
{
!
f
o
c
u
s
M
o
d
e
 
&
&
 
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
 
h
e
i
g
h
t
:
 
0
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
 
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
 
h
e
i
g
h
t
:
 
0
 
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
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
 
m
b
-
4
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
I
E
S
.
m
a
p
(
(
c
a
t
)
 
=
>
 
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
c
a
t
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
 
s
e
t
C
a
t
e
g
o
r
y
F
i
l
t
e
r
(
c
a
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
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
-
a
l
l
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
F
i
l
t
e
r
 
=
=
=
 
c
a
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
w
h
i
t
e
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
s
c
a
l
e
-
1
0
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
t
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
}
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




 
 
 
 
 
 
 
 
{
/
*
 
Q
u
e
s
t
i
o
n
 
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
p


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
u
r
r
e
n
t
I
n
d
e
x
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
0
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
1
0
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
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
3
 
$
{
f
o
c
u
s
M
o
d
e
 
?
 
"
t
e
x
t
-
l
g
 
m
d
:
t
e
x
t
-
x
l
"
 
:
 
"
t
e
x
t
-
s
m
"
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
q
u
e
s
t
i
o
n
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
p
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




 
 
 
 
 
 
 
 
{
/
*
 
T
o
g
g
l
e
 
*
/
}


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
E
x
p
a
n
d
e
d
(
(
v
)
 
=
>
 
!
v
)
}


 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
3
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
 
b
g
-
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
 
p
-
0
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
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
{
`
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
-
t
r
a
n
s
f
o
r
m
 
$
{
e
x
p
a
n
d
e
d
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
?
 
"
H
i
d
e
 
a
n
s
w
e
r
"
 
:
 
"
S
h
o
w
 
a
n
s
w
e
r
 
&
 
t
i
p
s
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




 
 
 
 
 
 
 
 
{
/
*
 
A
n
s
w
e
r
 
+
 
t
i
p
s
 
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
>


 
 
 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
&
&
 
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
 
h
e
i
g
h
t
:
 
0
,
 
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
5
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
0
,
 
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
5
 
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
 
d
u
r
a
t
i
o
n
:
 
0
.
3
,
 
e
a
s
e
:
 
"
e
a
s
e
I
n
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
m
t
-
3
 
s
p
a
c
e
-
y
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
p
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
/
6
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
b
-
1
.
5
"
>
A
n
s
w
e
r
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
q
.
a
n
s
w
e
r
}
<
/
p
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
p
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
9
0
0
/
1
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
l
i
m
e
-
8
0
0
/
4
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
m
b
-
2
"
>
K
e
y
 
P
o
i
n
t
s
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
u
l
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
{
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
o
w
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
5


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
t
i
p
s
.
m
a
p
(
(
t
i
p
,
 
i
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
l
i
 
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
{
 
h
i
d
d
e
n
:
 
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
 
x
:
 
1
0
 
}
,
 
s
h
o
w
:
 
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
 
x
:
 
0
 
}
 
}
}
 
k
e
y
=
{
i
}
 
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
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
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
m
t
-
1
.
5
 
w
-
1
 
h
-
1
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
l
i
m
e
-
4
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
p
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
l
i
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
u
l
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
}


 
 
 
 
 
 
 
 
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
;


}


