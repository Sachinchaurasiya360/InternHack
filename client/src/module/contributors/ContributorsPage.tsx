
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
M
e
m
o
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
 
G
i
t
h
u
b
,
 
E
x
t
e
r
n
a
l
L
i
n
k
,
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
 
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
 
N
a
v
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
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
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
F
o
o
t
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
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
F
o
o
t
e
r
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
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
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
S
E
O
"
;




t
y
p
e
 
C
o
n
t
r
i
b
u
t
o
r
 
=
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
l
o
g
i
n
:
 
s
t
r
i
n
g
;


 
 
a
v
a
t
a
r
_
u
r
l
:
 
s
t
r
i
n
g
;


 
 
h
t
m
l
_
u
r
l
:
 
s
t
r
i
n
g
;


 
 
c
o
n
t
r
i
b
u
t
i
o
n
s
:
 
n
u
m
b
e
r
;


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
 
C
o
n
t
r
i
b
u
t
o
r
s
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
c
o
n
t
r
i
b
u
t
o
r
s
,
 
s
e
t
C
o
n
t
r
i
b
u
t
o
r
s
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
<
C
o
n
t
r
i
b
u
t
o
r
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
a
l
l
C
o
n
t
r
i
b
u
t
o
r
s
,
 
s
e
t
A
l
l
C
o
n
t
r
i
b
u
t
o
r
s
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
<
C
o
n
t
r
i
b
u
t
o
r
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
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


 
 
 
 
c
o
n
s
t
 
f
e
t
c
h
C
o
n
t
r
i
b
u
t
o
r
s
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
l
e
t
 
p
a
g
e
 
=
 
1
;


 
 
 
 
 
 
 
 
l
e
t
 
a
l
l
D
a
t
a
:
 
C
o
n
t
r
i
b
u
t
o
r
[
]
 
=
 
[
]
;




 
 
 
 
 
 
 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
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
 
=
 
a
w
a
i
t
 
f
e
t
c
h
(


 
 
 
 
 
 
 
 
 
 
 
 
`
h
t
t
p
s
:
/
/
a
p
i
.
g
i
t
h
u
b
.
c
o
m
/
r
e
p
o
s
/
S
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
3
6
0
/
I
n
t
e
r
n
H
a
c
k
/
c
o
n
t
r
i
b
u
t
o
r
s
?
p
e
r
_
p
a
g
e
=
1
0
0
&
p
a
g
e
=
$
{
p
a
g
e
}
`


 
 
 
 
 
 
 
 
 
 
)
;




 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
r
e
s
p
o
n
s
e
.
o
k
)
 
b
r
e
a
k
;




 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
a
:
 
C
o
n
t
r
i
b
u
t
o
r
[
]
 
=
 
a
w
a
i
t
 
r
e
s
p
o
n
s
e
.
j
s
o
n
(
)
;




 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
A
r
r
a
y
.
i
s
A
r
r
a
y
(
d
a
t
a
)
 
|
|
 
d
a
t
a
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
 
b
r
e
a
k
;




 
 
 
 
 
 
 
 
 
 
a
l
l
D
a
t
a
 
=
 
[
.
.
.
a
l
l
D
a
t
a
,
 
.
.
.
d
a
t
a
]
;




 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
a
t
a
.
l
e
n
g
t
h
 
<
 
1
0
0
)
 
b
r
e
a
k
;


 
 
 
 
 
 
 
 
 
 
p
a
g
e
+
+
;


 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
s
e
t
A
l
l
C
o
n
t
r
i
b
u
t
o
r
s
(
a
l
l
D
a
t
a
)
;




 
 
 
 
 
 
 
 
/
/
 
O
n
l
y
 
s
h
o
w
 
c
o
n
t
r
i
b
u
t
o
r
s
 
w
i
t
h
 
m
o
r
e
 
t
h
a
n
 
5
 
c
o
n
t
r
i
b
u
t
i
o
n
s


 
 
 
 
 
 
 
 
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
C
o
n
t
r
i
b
u
t
o
r
s
 
=
 
a
l
l
D
a
t
a
.
f
i
l
t
e
r
(


 
 
 
 
 
 
 
 
 
 
(
c
o
n
t
r
i
b
u
t
o
r
)
 
=
>
 
c
o
n
t
r
i
b
u
t
o
r
.
c
o
n
t
r
i
b
u
t
i
o
n
s
 
>
 
5


 
 
 
 
 
 
 
 
)
;




 
 
 
 
 
 
 
 
s
e
t
C
o
n
t
r
i
b
u
t
o
r
s
(
f
i
l
t
e
r
e
d
C
o
n
t
r
i
b
u
t
o
r
s
)
;


 
 
 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
o
r
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
f
e
t
c
h
 
c
o
n
t
r
i
b
u
t
o
r
s
"
,
 
e
r
r
o
r
)
;


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
t
r
u
e
)
;


 
 
 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
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
;




 
 
 
 
f
e
t
c
h
C
o
n
t
r
i
b
u
t
o
r
s
(
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
C
o
n
t
r
i
b
u
t
i
o
n
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
a
l
l
C
o
n
t
r
i
b
u
t
o
r
s
.
r
e
d
u
c
e
(


 
 
 
 
 
 
(
a
c
c
,
 
c
u
r
r
)
 
=
>
 
a
c
c
 
+
 
c
u
r
r
.
c
o
n
t
r
i
b
u
t
i
o
n
s
,


 
 
 
 
 
 
0


 
 
 
 
)
;


 
 
}
,
 
[
a
l
l
C
o
n
t
r
i
b
u
t
o
r
s
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
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
o
n
t
r
i
b
u
t
o
r
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
M
e
e
t
 
t
h
e
 
o
p
e
n
-
s
o
u
r
c
e
 
c
o
n
t
r
i
b
u
t
o
r
s
 
w
h
o
 
b
u
i
l
t
 
I
n
t
e
r
n
H
a
c
k
.
"


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>




 
 
 
 
 
 
<
s
e
c
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
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
w
h
i
t
e
 
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
 
d
u
r
a
t
i
o
n
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
a
x
-
w
-
7
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
y
-
2
4
"
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
r
o
 
S
e
c
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
m
a
x
-
w
-
3
x
l
 
m
b
-
2
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
 
t
e
x
t
-
x
s
 
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
 
m
b
-
6
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
h
-
1
.
5
 
w
-
1
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
 
s
o
u
r
c
e
 
c
o
m
m
u
n
i
t
y


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
u
i
l
t
 
b
y
 
c
o
n
t
r
i
b
u
t
o
r
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
l
o
c
k
 
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
w
e
r
e
d
 
b
y
 
c
o
m
m
u
n
i
t
y
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
m
t
-
6
 
t
e
x
t
-
l
g
 
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
a
x
-
w
-
2
x
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
n
H
a
c
k
 
i
s
 
s
h
a
p
e
d
 
b
y
 
d
e
v
e
l
o
p
e
r
s
,
 
s
t
u
d
e
n
t
s
,
 
a
n
d
 
o
p
e
n
-
s
o
u
r
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
r
i
b
u
t
o
r
s
 
f
r
o
m
 
a
r
o
u
n
d
 
t
h
e
 
w
o
r
l
d
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
8
 
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
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
i
v
e
 
G
i
t
H
u
b
 
c
o
n
t
r
i
b
u
t
o
r
 
d
a
t
a


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
C
a
r
d
s
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
6
 
m
b
-
2
0
"
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
i
b
u
t
o
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
-
4
 
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
r
o
u
n
d
e
d
-
2
x
l
 
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
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
8
 
s
h
a
d
o
w
-
s
m
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
g
 
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
/
[
0
.
0
3
]
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
r
i
b
u
t
o
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
4
x
l
 
f
o
n
t
-
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
l
l
C
o
n
t
r
i
b
u
t
o
r
s
.
l
e
n
g
t
h
}
+


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
i
b
u
t
i
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
-
4
 
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
r
o
u
n
d
e
d
-
2
x
l
 
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
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
8
 
s
h
a
d
o
w
-
s
m
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
g
 
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
/
[
0
.
0
3
]
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
P
u
l
l
R
e
q
u
e
s
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
4
 
h
-
4
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
o
t
a
l
 
C
o
n
t
r
i
b
u
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
2
 
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
4
x
l
 
f
o
n
t
-
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
C
o
n
t
r
i
b
u
t
i
o
n
s
}
+


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
p
o
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
-
4
 
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
r
o
u
n
d
e
d
-
2
x
l
 
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
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
8
 
s
h
a
d
o
w
-
s
m
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
g
 
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
/
[
0
.
0
3
]
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
p
o
s
i
t
o
r
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
S
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
3
6
0
/
I
n
t
e
r
n
H
a
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
l
i
m
e
-
4
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
 
d
u
r
a
t
i
o
n
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
o
n
 
G
i
t
H
u
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
o
a
d
i
n
g
 
S
k
e
l
e
t
o
n
 
/
 
E
r
r
o
r
 
/
 
G
r
i
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
c
e
n
t
e
r
 
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
 
p
y
-
2
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
u
l
d
 
n
o
t
 
l
o
a
d
 
c
o
n
t
r
i
b
u
t
o
r
s
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
 
l
a
t
e
r
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
l
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
l
g
:
g
r
i
d
-
c
o
l
s
-
4
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
8
)
]
.
m
a
p
(
(
_
,
 
i
d
x
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
d
x
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
h
-
7
2
 
r
o
u
n
d
e
d
-
2
x
l
 
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
 
a
n
i
m
a
t
e
-
p
u
l
s
e
 
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
/
[
0
.
0
3
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
v
i
s
i
b
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
l
g
:
g
r
i
d
-
c
o
l
s
-
4
 
g
a
p
-
6
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
r
i
b
u
t
o
r
s
.
m
a
p
(
(
c
o
n
t
r
i
b
u
t
o
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
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
o
n
t
r
i
b
u
t
o
r
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
c
o
n
t
r
i
b
u
t
o
r
.
h
t
m
l
_
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
 
2
0
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
:
 
0
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
4
5
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
-
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
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
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
 
r
o
u
n
d
e
d
-
2
x
l
 
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
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
x
l
 
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
/
[
0
.
0
3
]
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
G
l
o
w
 
E
f
f
e
c
t
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
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
o
p
a
c
i
t
y
 
d
u
r
a
t
i
o
n
-
5
0
0
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
l
i
m
e
-
4
0
0
/
1
0
 
v
i
a
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
 
t
o
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
 
/
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
c
o
n
t
r
i
b
u
t
o
r
.
a
v
a
t
a
r
_
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
c
o
n
t
r
i
b
u
t
o
r
.
l
o
g
i
n
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
w
-
2
0
 
h
-
2
0
 
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
 
o
b
j
e
c
t
-
c
o
v
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
x
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
r
i
b
u
t
o
r
.
l
o
g
i
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
m
t
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
r
i
b
u
t
o
r
.
c
o
n
t
r
i
b
u
t
i
o
n
s
}
 
c
o
n
t
r
i
b
u
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
6
 
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
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
i
t
H
u
b
 
P
r
o
f
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
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
a
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
s
e
c
t
i
o
n
>




 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
>


 
 
 
 
<
/
>


 
 
)
;


}


