
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
C
a
l
l
b
a
c
k
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
 
u
s
e
P
a
r
a
m
s
,
 
L
i
n
k
,
 
u
s
e
N
a
v
i
g
a
t
e
,
 
N
a
v
i
g
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
-
r
o
u
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


 
 
C
h
e
v
r
o
n
L
e
f
t
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


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
S
t
a
r
,


 
 
I
n
f
o
,


 
 
A
r
r
o
w
U
p
R
i
g
h
t
,


 
 
M
e
s
s
a
g
e
S
q
u
a
r
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
 
{
 
s
e
c
t
i
o
n
s
,
 
q
u
e
s
t
i
o
n
s
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
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


i
m
p
o
r
t
 
{
 
C
o
d
e
B
l
o
c
k
 
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
u
i
/
C
o
d
e
B
l
o
c
k
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
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
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


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
A
u
t
h
S
t
o
r
e
 
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
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
r
e
p
o
r
t
M
i
l
e
s
t
o
n
e
 
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
.
.
/
l
i
b
/
m
i
l
e
s
t
o
n
e
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
a
p
i
 
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
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
K
i
c
k
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
u
i
/
K
i
c
k
e
r
"
;




a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
g
e
t
S
e
r
v
e
r
P
r
o
g
r
e
s
s
(
)
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
"
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
-
p
r
o
g
r
e
s
s
"
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
;


}




a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
u
p
d
a
t
e
S
e
r
v
e
r
P
r
o
g
r
e
s
s
(


 
 
q
u
e
s
t
i
o
n
I
d
:
 
s
t
r
i
n
g
,


 
 
a
c
t
i
o
n
:
 
"
c
o
m
p
l
e
t
e
"
 
|
 
"
u
n
c
o
m
p
l
e
t
e
"
 
|
 
"
v
i
s
i
t
"


)
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
a
t
c
h
(
"
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
-
p
r
o
g
r
e
s
s
"
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
I
d
,
 
a
c
t
i
o
n
 
}
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
;


}




c
o
n
s
t
 
D
I
F
F
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


 
 
B
e
g
i
n
n
e
r
:
 
 
 
 
 
"
t
e
x
t
-
g
r
e
e
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
g
r
e
e
n
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
g
r
e
e
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
o
r
d
e
r
-
g
r
e
e
n
-
9
0
0
/
6
0
"
,


 
 
I
n
t
e
r
m
e
d
i
a
t
e
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
9
0
0
/
6
0
"
,


 
 
A
d
v
a
n
c
e
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
9
0
0
/
6
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
 
T
Y
P
E
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


 
 
T
h
e
o
r
y
:
 
 
 
 
 
 
"
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
 
b
o
r
d
e
r
-
b
l
u
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
b
l
u
e
-
9
0
0
/
6
0
"
,


 
 
C
o
d
i
n
g
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
9
0
0
/
6
0
"
,


 
 
S
i
t
u
a
t
i
o
n
a
l
:
 
"
t
e
x
t
-
p
u
r
p
l
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
p
u
r
p
l
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
p
u
r
p
l
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
p
u
r
p
l
e
-
9
0
0
/
6
0
"
,


 
 
C
o
n
c
e
p
t
:
 
 
 
 
 
"
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
 
b
o
r
d
e
r
-
c
y
a
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
o
r
d
e
r
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
6
0
"
,


 
 
E
x
p
e
r
i
e
n
c
e
:
 
 
"
t
e
x
t
-
r
o
s
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
r
o
s
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
r
o
s
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
r
o
s
e
-
9
0
0
/
6
0
"
,


}
;




f
u
n
c
t
i
o
n
 
M
e
t
a
C
h
i
p
(
{
 
c
h
i
l
d
r
e
n
,
 
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
"
 
}
:
 
{
 
c
h
i
l
d
r
e
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
 
c
l
a
s
s
N
a
m
e
?
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
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
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
r
 
b
o
r
d
e
r
 
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
 
$
{
c
l
a
s
s
N
a
m
e
 
|
|
 
"
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
"
}
`
}
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
s
p
a
n
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
 
S
e
c
t
i
o
n
L
a
b
e
l
(
{
 
i
c
o
n
,
 
c
h
i
l
d
r
e
n
,
 
a
c
c
e
n
t
 
=
 
"
l
i
m
e
"
 
}
:
 
{
 
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
 
c
h
i
l
d
r
e
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
 
a
c
c
e
n
t
?
:
 
"
l
i
m
e
"
 
|
 
"
b
l
u
e
"
 
|
 
"
a
m
b
e
r
"
 
|
 
"
v
i
o
l
e
t
"
 
}
)
 
{


 
 
c
o
n
s
t
 
d
o
t
C
o
l
o
r
 
=
 
{


 
 
 
 
l
i
m
e
:
 
"
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
"
,


 
 
 
 
b
l
u
e
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
4
0
0
"
,


 
 
 
 
a
m
b
e
r
:
 
"
b
g
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
"
,


 
 
 
 
v
i
o
l
e
t
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
4
0
0
"
,


 
 
}
[
a
c
c
e
n
t
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
h
-
1
 
w
-
1
 
$
{
d
o
t
C
o
l
o
r
}
`
}
 
/
>


 
 
 
 
 
 
{
i
c
o
n
}


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




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
 
I
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
 
{
 
s
e
c
t
i
o
n
S
l
u
g
,
 
q
u
e
s
t
i
o
n
I
d
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
b
a
s
e
P
a
t
h
 
=
 
"
/
l
e
a
r
n
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
"
;


 
 
c
o
n
s
t
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
;




 
 
c
o
n
s
t
 
[
c
o
m
p
l
e
t
e
d
,
 
s
e
t
C
o
m
p
l
e
t
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
 
s
e
c
t
i
o
n
 
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
 
s
e
c
t
i
o
n
s
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
e
c
t
i
o
n
S
l
u
g
)
 
|
|
 
n
u
l
l
,
 
[
s
e
c
t
i
o
n
S
l
u
g
]
)
;


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
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
 
q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
.
s
e
c
t
i
o
n
I
d
 
=
=
=
 
s
e
c
t
i
o
n
S
l
u
g
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
o
r
d
e
r
I
n
d
e
x
 
-
 
b
.
o
r
d
e
r
I
n
d
e
x
)
;
}
,
 
[
s
e
c
t
i
o
n
S
l
u
g
]
)
;


 
 
c
o
n
s
t
 
q
u
e
s
t
i
o
n
 
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
 
s
e
c
t
i
o
n
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
f
i
n
d
(
(
q
)
 
=
>
 
q
.
i
d
 
=
=
=
 
q
u
e
s
t
i
o
n
I
d
)
 
|
|
 
n
u
l
l
;
}
,
 
[
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
,
 
q
u
e
s
t
i
o
n
I
d
]
)
;




 
 
c
o
n
s
t
 
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
 
=
 
q
u
e
s
t
i
o
n


 
 
 
 
?
 
s
e
c
t
i
o
n
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
f
i
n
d
I
n
d
e
x
(
(
q
)
 
=
>
 
q
.
i
d
 
=
=
=
 
q
u
e
s
t
i
o
n
.
i
d
)


 
 
 
 
:
 
-
1
;




 
 
c
o
n
s
t
 
p
r
e
v
Q
u
e
s
t
i
o
n
 
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
 
0


 
 
 
 
 
 
?
 
s
e
c
t
i
o
n
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
 
-
 
1
]


 
 
 
 
 
 
:
 
n
u
l
l
;




 
 
c
o
n
s
t
 
n
e
x
t
Q
u
e
s
t
i
o
n
 
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
 
<
 
s
e
c
t
i
o
n
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
 
-
 
1


 
 
 
 
 
 
?
 
s
e
c
t
i
o
n
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
 
+
 
1
]


 
 
 
 
 
 
:
 
n
u
l
l
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
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
|
|
 
!
q
u
e
s
t
i
o
n
I
d
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
 
l
o
a
d
P
r
o
g
r
e
s
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


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
a
w
a
i
t
 
g
e
t
S
e
r
v
e
r
P
r
o
g
r
e
s
s
(
)
;




 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(


 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
.
c
o
m
p
l
e
t
e
d
I
d
s
?
.
i
n
c
l
u
d
e
s
(
q
u
e
s
t
i
o
n
I
d
)
 
?
?
 
f
a
l
s
e


 
 
 
 
 
 
 
 
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
e
r
r
)
;


 
 
 
 
 
 
}


 
 
 
 
}
;




 
 
 
 
l
o
a
d
P
r
o
g
r
e
s
s
(
)
;


 
 
}
,
 
[
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
q
u
e
s
t
i
o
n
I
d
]
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
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
|
|
 
!
q
u
e
s
t
i
o
n
I
d
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
i
m
e
o
u
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


 
 
 
 
 
 
u
p
d
a
t
e
S
e
r
v
e
r
P
r
o
g
r
e
s
s
(
q
u
e
s
t
i
o
n
I
d
,
 
"
v
i
s
i
t
"
)


 
 
 
 
 
 
 
 
.
c
a
t
c
h
(
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
)
;


 
 
 
 
}
,
 
5
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
i
m
e
o
u
t
)
;


 
 
}
,
 
[
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
q
u
e
s
t
i
o
n
I
d
]
)
;




 
 
/
/
 
A
n
a
l
y
t
i
c
s
:
 
f
i
r
e
-
a
n
d
-
f
o
r
g
e
t
 
v
i
e
w
 
p
i
n
g
 
(
1
 
s
 
a
f
t
e
r
 
m
o
u
n
t
 
t
o
 
a
v
o
i
d
 
b
o
u
n
c
e
 
n
o
i
s
e
)


 
 
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
q
u
e
s
t
i
o
n
I
d
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


 
 
 
 
 
 
a
p
i
.
p
o
s
t
(
"
/
a
n
a
l
y
t
i
c
s
/
t
r
a
c
k
"
,
 
{


 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
T
y
p
e
:
 
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
_
Q
U
E
S
T
I
O
N
"
,


 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
I
d
:
 
q
u
e
s
t
i
o
n
I
d
,


 
 
 
 
 
 
 
 
t
i
m
e
S
p
e
n
t
M
s
:
 
0
,


 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d
:
 
f
a
l
s
e
,


 
 
 
 
 
 
}
)
.
c
a
t
c
h
(
(
)
 
=
>
 
{
}
)
;


 
 
 
 
}
,
 
1
0
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
q
u
e
s
t
i
o
n
I
d
]
)
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
T
o
g
g
l
e
C
o
m
p
l
e
t
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
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


 
 
 
 
i
f
 
(
!
q
u
e
s
t
i
o
n
I
d
 
|
|
 
!
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
 
r
e
t
u
r
n
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
o
n
 
=


 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d
 
?
 
"
u
n
c
o
m
p
l
e
t
e
"
 
:
 
"
c
o
m
p
l
e
t
e
"
;




 
 
 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
d
P
r
o
g
r
e
s
s
 
=


 
 
 
 
 
 
 
 
a
w
a
i
t
 
u
p
d
a
t
e
S
e
r
v
e
r
P
r
o
g
r
e
s
s
(


 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
I
d
,


 
 
 
 
 
 
 
 
 
 
a
c
t
i
o
n


 
 
 
 
 
 
 
 
)
;




 
 
 
 
 
 
c
o
n
s
t
 
i
s
N
o
w
C
o
m
p
l
e
t
e
d
 
=


 
 
 
 
 
 
 
 
u
p
d
a
t
e
d
P
r
o
g
r
e
s
s
.
c
o
m
p
l
e
t
e
d
I
d
s
.
i
n
c
l
u
d
e
s
(
q
u
e
s
t
i
o
n
I
d
)
;




 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
i
s
N
o
w
C
o
m
p
l
e
t
e
d
)
;




 
 
 
 
 
 
/
/
 
A
n
a
l
y
t
i
c
s
:
 
t
r
a
c
k
 
c
o
m
p
l
e
t
i
o
n
 
s
t
a
t
e
 
c
h
a
n
g
e
 
—
 
f
i
r
e
-
a
n
d
-
f
o
r
g
e
t


 
 
 
 
 
 
i
f
 
(
i
s
N
o
w
C
o
m
p
l
e
t
e
d
)
 
{


 
 
 
 
 
 
 
 
a
p
i
.
p
o
s
t
(
"
/
a
n
a
l
y
t
i
c
s
/
t
r
a
c
k
"
,
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
T
y
p
e
:
 
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
_
Q
U
E
S
T
I
O
N
"
,


 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
I
d
:
 
q
u
e
s
t
i
o
n
I
d
,


 
 
 
 
 
 
 
 
 
 
t
i
m
e
S
p
e
n
t
M
s
:
 
0
,


 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
}
)
.
c
a
t
c
h
(
(
)
 
=
>
 
{
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
i
f
 
(


 
 
 
 
 
 
 
 
i
s
N
o
w
C
o
m
p
l
e
t
e
d
 
&
&


 
 
 
 
 
 
 
 
s
e
c
t
i
o
n
S
l
u
g


 
 
 
 
 
 
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
l
l
D
o
n
e
 
=
 
s
e
c
t
i
o
n
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
e
v
e
r
y
(
(
q
)
 
=
>


 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
d
P
r
o
g
r
e
s
s
.
c
o
m
p
l
e
t
e
d
I
d
s
.
i
n
c
l
u
d
e
s
(
q
.
i
d
)


 
 
 
 
 
 
 
 
)
;




 
 
 
 
 
 
 
 
i
f
 
(
a
l
l
D
o
n
e
)
 
{


 
 
 
 
 
 
 
 
 
 
r
e
p
o
r
t
M
i
l
e
s
t
o
n
e
(


 
 
 
 
 
 
 
 
 
 
 
 
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
_
S
E
C
T
I
O
N
_
C
O
M
P
L
E
T
E
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
e
c
t
i
o
n
S
l
u
g


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
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
e
r
r
)
;


 
 
 
 
}


 
 
}
,
 
[


 
 
 
 
q
u
e
s
t
i
o
n
I
d
,


 
 
 
 
c
o
m
p
l
e
t
e
d
,


 
 
 
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,


 
 
 
 
s
e
c
t
i
o
n
S
l
u
g
,


 
 
 
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
,


 
 
]
)
;




 
 
c
o
n
s
t
 
l
a
n
g
u
a
g
e
 
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


 
 
 
 
i
f
 
(
!
s
e
c
t
i
o
n
S
l
u
g
)
 
r
e
t
u
r
n
 
"
j
a
v
a
s
c
r
i
p
t
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
j
a
v
a
s
c
r
i
p
t
"
)
 
|
|
 
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
n
o
d
e
j
s
"
)
 
|
|
 
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
s
y
s
t
e
m
-
d
e
s
i
g
n
"
)
 
|
|
 
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
b
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
)
)
 
r
e
t
u
r
n
 
"
j
a
v
a
s
c
r
i
p
t
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
r
e
a
c
t
"
)
)
 
r
e
t
u
r
n
 
"
t
s
x
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
t
y
p
e
s
c
r
i
p
t
"
)
)
 
r
e
t
u
r
n
 
"
t
y
p
e
s
c
r
i
p
t
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
p
y
t
h
o
n
"
)
 
|
|
 
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
f
a
s
t
a
p
i
"
)
)
 
r
e
t
u
r
n
 
"
p
y
t
h
o
n
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
s
q
l
"
)
)
 
r
e
t
u
r
n
 
"
s
q
l
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
h
t
m
l
-
c
s
s
"
)
)
 
r
e
t
u
r
n
 
"
h
t
m
l
"
;


 
 
 
 
i
f
 
(
s
e
c
t
i
o
n
S
l
u
g
.
i
n
c
l
u
d
e
s
(
"
g
i
t
-
d
e
v
o
p
s
"
)
)
 
r
e
t
u
r
n
 
"
b
a
s
h
"
;


 
 
 
 
r
e
t
u
r
n
 
"
j
a
v
a
s
c
r
i
p
t
"
;


 
 
}
,
 
[
s
e
c
t
i
o
n
S
l
u
g
]
)
;




 
 
i
f
 
(
s
e
c
t
i
o
n
 
&
&
 
!
s
e
c
t
i
o
n
.
f
r
e
e
T
i
e
r
 
&
&
 
!
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
 
{


 
 
 
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
{
b
a
s
e
P
a
t
h
}
 
r
e
p
l
a
c
e
 
/
>
;


 
 
}




 
 
i
f
 
(
!
q
u
e
s
t
i
o
n
 
|
|
 
!
s
e
c
t
i
o
n
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
x
-
a
u
t
o
 
p
y
-
2
4
 
p
x
-
6
 
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
 
r
o
u
n
d
e
d
-
x
l
 
p
-
8
"
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
2
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
 
n
o
t
 
f
o
u
n
d


 
 
 
 
 
 
 
 
<
/
h
2
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


 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
 
m
a
y
 
h
a
v
e
 
b
e
e
n
 
m
o
v
e
d
,
 
d
e
l
e
t
e
d
,


 
 
 
 
 
 
 
 
 
 
o
r
 
t
h
e
 
U
R
L
 
m
i
g
h
t
 
b
e
 
i
n
c
o
r
r
e
c
t
.


 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
{
b
a
s
e
P
a
t
h
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
 
p
x
-
4
 
p
y
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
w
h
i
t
e
/
1
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
 
h
o
v
e
r
:
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
 
h
o
v
e
r
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


 
 
 
 
 
 
 
 
 
 
B
r
o
w
s
e
 
a
l
l
 
q
u
e
s
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
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
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
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




 
 
c
o
n
s
t
 
c
o
n
t
e
n
t
 
=
 
q
u
e
s
t
i
o
n
.
c
o
n
t
e
n
t
;


 
 
c
o
n
s
t
 
h
a
s
V
a
l
i
d
C
o
n
t
e
n
t
 
=
 
c
o
n
t
e
n
t
 
&
&
 
t
y
p
e
o
f
 
c
o
n
t
e
n
t
.
q
u
e
s
t
i
o
n
 
=
=
=
 
"
s
t
r
i
n
g
"
 
&
&
 
t
y
p
e
o
f
 
c
o
n
t
e
n
t
.
a
n
s
w
e
r
 
=
=
=
 
"
s
t
r
i
n
g
"
;


 
 


 
 
i
f
 
(
!
h
a
s
V
a
l
i
d
C
o
n
t
e
n
t
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
M
a
l
f
o
r
m
e
d
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
 
p
a
y
l
o
a
d
"
,
 
{


 
 
 
 
 
 
s
e
c
t
i
o
n
S
l
u
g
,


 
 
 
 
 
 
q
u
e
s
t
i
o
n
I
d
,


 
 
 
 
}
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
x
-
a
u
t
o
 
p
y
-
2
4
 
p
x
-
6
 
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
 
r
o
u
n
d
e
d
-
x
l
 
p
-
8
"
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
2
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
Q
u
e
s
t
i
o
n
 
n
o
t
 
f
o
u
n
d
<
/
h
2
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
v
a
l
i
d
 
o
r
 
c
o
r
r
u
p
t
e
d
 
q
u
e
s
t
i
o
n
 
d
a
t
a
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
b
a
s
e
P
a
t
h
}
>
G
o
 
b
a
c
k
<
/
L
i
n
k
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


 
 


 
 
c
o
n
s
t
 
c
o
d
e
E
x
a
m
p
l
e
s
 
=
 
c
o
n
t
e
n
t
.
c
o
d
e
E
x
a
m
p
l
e
s
 
?
?
 
[
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
 
p
b
-
1
2
"
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
{
`
$
{
q
u
e
s
t
i
o
n
.
t
i
t
l
e
}
 
-
 
I
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
`
}


 
 
 
 
 
 
 
 
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
{
c
o
n
t
e
n
t
.
a
n
s
w
e
r
?
.
s
l
i
c
e
(
0
,
 
1
6
0
)
 
|
|
 
`
D
e
t
a
i
l
e
d
 
a
n
s
w
e
r
 
f
o
r
 
"
$
{
q
u
e
s
t
i
o
n
.
t
i
t
l
e
}
"
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
 
w
i
t
h
 
c
o
d
e
 
e
x
a
m
p
l
e
s
.
`
}


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
`
/
l
e
a
r
n
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
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
q
u
e
s
t
i
o
n
I
d
}
`
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
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
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
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
 
1
p
x
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
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
 
m
a
x
-
w
-
4
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
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
6
 
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
m
t
-
2
 
m
b
-
8
 
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
 
p
b
-
8
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
 
g
a
p
-
3
 
m
b
-
4
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
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
m
i
n
-
w
-
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
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
p
r
e
p
 
/
 
<
L
i
n
k
 
t
o
=
{
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
`
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
9
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
5
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
s
e
c
t
i
o
n
S
l
u
g
}
<
/
L
i
n
k
>
 
/
 
#
{
S
t
r
i
n
g
(
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
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
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
K
i
c
k
e
r
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
1
 
s
h
r
i
n
k
-
0
"
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
 
p
r
e
v
Q
u
e
s
t
i
o
n
 
&
&
 
n
a
v
i
g
a
t
e
(
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
p
r
e
v
Q
u
e
s
t
i
o
n
.
i
d
}
`
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
p
r
e
v
Q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
r
e
v
i
o
u
s
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
2
 
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
 
h
o
v
e
r
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
5
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
3
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
9
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
5
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
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
L
e
f
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
 
p
x
-
2
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
+
 
1
}
 
/
 
{
s
e
c
t
i
o
n
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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
 
n
e
x
t
Q
u
e
s
t
i
o
n
 
&
&
 
n
a
v
i
g
a
t
e
(
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
n
e
x
t
Q
u
e
s
t
i
o
n
.
i
d
}
`
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
n
e
x
t
Q
u
e
s
t
i
o
n
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
2
 
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
 
h
o
v
e
r
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
5
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
3
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
9
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
5
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
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
4
 
h
-
4
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
2
x
l
 
s
m
:
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
t
i
g
h
t
 
w
r
a
p
-
b
r
e
a
k
-
w
o
r
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
q
u
e
s
t
i
o
n
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
1
.
5
 
f
l
e
x
-
w
r
a
p
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
{
D
I
F
F
_
S
T
Y
L
E
[
q
u
e
s
t
i
o
n
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
>
{
q
u
e
s
t
i
o
n
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
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
{
T
Y
P
E
_
S
T
Y
L
E
[
q
u
e
s
t
i
o
n
.
t
y
p
e
]
}
>
{
q
u
e
s
t
i
o
n
.
t
y
p
e
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
l
e
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
9
0
0
/
6
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
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
w
-
3
 
h
-
3
"
 
/
>
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
q
u
e
s
t
i
o
n
.
c
o
n
c
e
p
t
s
.
m
a
p
(
(
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
k
e
y
=
{
c
}
>
{
c
}
<
/
M
e
t
a
C
h
i
p
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
s
p
a
c
e
-
y
-
8
"
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
4
,
 
d
e
l
a
y
:
 
0
.
0
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
i
c
o
n
=
{
<
M
e
s
s
a
g
e
S
q
u
a
r
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
 
h
-
3
"
 
/
>
}
>
t
h
e
 
q
u
e
s
t
i
o
n
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
 
p
-
5
 
s
m
:
p
-
6
 
p
l
-
7
 
s
m
:
p
l
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
a
r
i
a
-
h
i
d
d
e
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
a
b
s
o
l
u
t
e
 
t
o
p
-
5
 
l
e
f
t
-
4
 
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
3
x
l
 
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
/
8
0
 
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
 
s
e
l
e
c
t
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
&
l
d
q
u
o
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
b
a
s
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
8
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
2
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
 
w
r
a
p
-
b
r
e
a
k
-
w
o
r
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
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
p
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
n
s
w
e
r
 
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
2
 
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
4
,
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
i
c
o
n
=
{
n
u
l
l
}
>
a
n
s
w
e
r
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
 
p
-
5
 
s
m
:
p
-
6
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
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
l
i
n
e
 
w
r
a
p
-
b
r
e
a
k
-
w
o
r
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
d
e
 
E
x
a
m
p
l
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
c
o
d
e
E
x
a
m
p
l
e
s
.
l
e
n
g
t
h
 
>
 
0
 
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
4
,
 
d
e
l
a
y
:
 
0
.
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
i
c
o
n
=
{
n
u
l
l
}
>
c
o
d
e
 
e
x
a
m
p
l
e
s
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
d
e
E
x
a
m
p
l
e
s
.
m
a
p
(
(
e
x
a
m
p
l
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
k
e
y
=
{
i
}
 
e
x
a
m
p
l
e
=
{
e
x
a
m
p
l
e
}
 
l
a
n
g
u
a
g
e
=
{
l
a
n
g
u
a
g
e
}
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
o
t
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
n
o
t
e
s
 
&
&
 
c
o
n
t
e
n
t
.
n
o
t
e
s
.
l
e
n
g
t
h
 
>
 
0
 
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
4
,
 
d
e
l
a
y
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
i
c
o
n
=
{
<
I
n
f
o
 
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
5
0
0
"
 
/
>
}
 
a
c
c
e
n
t
=
"
b
l
u
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
 
p
o
i
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
 
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
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
d
i
v
i
d
e
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
n
o
t
e
s
.
m
a
p
(
(
n
o
t
e
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
3
 
p
x
-
5
 
p
y
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
e
x
t
-
b
l
u
e
-
5
0
0
 
t
a
b
u
l
a
r
-
n
u
m
s
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
n
o
t
e
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
o
l
l
o
w
-
U
p
 
Q
u
e
s
t
i
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
f
o
l
l
o
w
U
p
s
 
&
&
 
c
o
n
t
e
n
t
.
f
o
l
l
o
w
U
p
s
.
l
e
n
g
t
h
 
>
 
0
 
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
4
,
 
d
e
l
a
y
:
 
0
.
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
i
c
o
n
=
{
<
M
e
s
s
a
g
e
S
q
u
a
r
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
 
h
-
3
 
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
5
0
0
"
 
/
>
}
 
a
c
c
e
n
t
=
"
a
m
b
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
m
o
n
 
f
o
l
l
o
w
-
u
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
f
o
l
l
o
w
U
p
s
.
m
a
p
(
(
f
o
l
l
o
w
U
p
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
3
 
p
x
-
4
 
p
y
-
3
 
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
 
h
o
v
e
r
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
3
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
9
0
0
/
6
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
a
m
b
e
r
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
a
m
b
e
r
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
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
f
o
l
l
o
w
U
p
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
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
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
i
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
s
 
&
&
 
c
o
n
t
e
n
t
.
i
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
s
.
l
e
n
g
t
h
 
>
 
0
 
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
4
,
 
d
e
l
a
y
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
L
a
b
e
l
 
i
c
o
n
=
{
<
S
t
a
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
3
 
h
-
3
 
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
5
0
0
 
f
i
l
l
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
0
"
 
/
>
}
 
a
c
c
e
n
t
=
"
v
i
o
l
e
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
t
i
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
L
a
b
e
l
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
n
t
e
n
t
.
i
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
3
 
p
x
-
4
 
p
y
-
3
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
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
v
i
o
l
e
t
-
5
0
0
 
f
i
l
l
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
0
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
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
t
i
p
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
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
4
,
 
d
e
l
a
y
:
 
0
.
3
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
 
g
a
p
-
3
 
p
t
-
6
 
b
o
r
d
e
r
-
t
 
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
"


 
 
 
 
 
 
 
 
 
 
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
h
a
n
d
l
e
T
o
g
g
l
e
C
o
m
p
l
e
t
e
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
 
h
o
v
e
r
:
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
9
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
5
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
9
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
h
o
v
e
r
:
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
9
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
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
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
l
e
t
e
d
 
?
 
"
C
o
m
p
l
e
t
e
d
"
 
:
 
"
M
a
r
k
 
a
s
 
c
o
m
p
l
e
t
e
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
n
e
x
t
Q
u
e
s
t
i
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
n
a
v
i
g
a
t
e
(
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
/
$
{
n
e
x
t
Q
u
e
s
t
i
o
n
.
i
d
}
`
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
g
r
o
u
p
 
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
1
.
5
 
p
x
-
3
 
p
y
-
2
 
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
w
h
i
t
e
/
1
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
 
h
o
v
e
r
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
4
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
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
 
h
-
3
 
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
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
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
t
r
a
n
s
l
a
t
e
-
x
-
0
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


