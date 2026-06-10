
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
 
X
C
i
r
c
l
e
,
 
C
l
o
c
k
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
 
t
y
p
e
 
{
 
J
s
R
u
n
R
e
s
u
l
t
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
j
s
-
e
n
g
i
n
e
"
;




i
n
t
e
r
f
a
c
e
 
J
s
C
o
n
s
o
l
e
O
u
t
p
u
t
P
r
o
p
s
 
{


 
 
r
e
s
u
l
t
:
 
J
s
R
u
n
R
e
s
u
l
t
 
|
 
n
u
l
l
;


 
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
?
:
 
s
t
r
i
n
g
;


 
 
i
s
C
o
r
r
e
c
t
?
:
 
b
o
o
l
e
a
n
 
|
 
n
u
l
l
;


}




c
o
n
s
t
 
L
O
G
_
C
O
L
O
R
S
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


 
 
l
o
g
:
 
"
t
e
x
t
-
g
r
a
y
-
1
0
0
"
,


 
 
w
a
r
n
:
 
"
t
e
x
t
-
y
e
l
l
o
w
-
4
0
0
"
,


 
 
e
r
r
o
r
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
4
0
0
"
,


 
 
i
n
f
o
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
 
J
s
C
o
n
s
o
l
e
O
u
t
p
u
t
(
{
 
r
e
s
u
l
t
,
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
,
 
i
s
C
o
r
r
e
c
t
 
}
:
 
J
s
C
o
n
s
o
l
e
O
u
t
p
u
t
P
r
o
p
s
)
 
{


 
 
i
f
 
(
!
r
e
s
u
l
t
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
 
p
y
-
8
 
t
e
x
t
-
g
r
a
y
-
4
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
a
y
-
5
0
0
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
R
u
n
 
y
o
u
r
 
c
o
d
e
 
t
o
 
s
e
e
 
o
u
t
p
u
t


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
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
3
 
p
y
-
2
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
/
5
0
 
r
o
u
n
d
e
d
-
l
g
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


 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
e
r
r
o
r
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
t
e
x
t
-
r
e
d
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
"
>
E
r
r
o
r
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
i
s
C
o
r
r
e
c
t
 
=
=
=
 
t
r
u
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
"
>
C
o
r
r
e
c
t
!
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
i
s
C
o
r
r
e
c
t
 
=
=
=
 
f
a
l
s
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
C
i
r
c
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
 
t
e
x
t
-
y
e
l
l
o
w
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
y
e
l
l
o
w
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
y
e
l
l
o
w
-
4
0
0
"
>
O
u
t
p
u
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
c
h
 
e
x
p
e
c
t
e
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
g
r
a
y
-
5
0
0
"
>
{
r
e
s
u
l
t
.
l
o
g
s
.
l
e
n
g
t
h
}
 
l
i
n
e
{
r
e
s
u
l
t
.
l
o
g
s
.
l
e
n
g
t
h
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
 
o
u
t
p
u
t
<
/
s
p
a
n
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
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
C
l
o
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


 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
t
i
m
e
M
s
}
m
s


 
 
 
 
 
 
 
 
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
 
E
r
r
o
r
 
d
i
s
p
l
a
y
 
*
/
}


 
 
 
 
 
 
{
r
e
s
u
l
t
.
e
r
r
o
r
 
&
&
 
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
p
-
3
 
b
g
-
r
e
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
r
e
d
-
9
0
0
/
2
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
r
e
d
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
r
e
d
-
8
0
0
 
r
o
u
n
d
e
d
-
l
g
"
>


 
 
 
 
 
 
 
 
 
 
<
p
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
3
0
0
 
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
w
r
a
p
 
f
o
n
t
-
m
o
n
o
"
>
{
r
e
s
u
l
t
.
e
r
r
o
r
}
<
/
p
r
e
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
C
o
n
s
o
l
e
 
o
u
t
p
u
t
 
*
/
}


 
 
 
 
 
 
{
!
r
e
s
u
l
t
.
e
r
r
o
r
 
&
&
 
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
g
r
a
y
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
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
b
g
-
g
r
a
y
-
9
5
0
 
p
-
4
 
m
a
x
-
h
-
6
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
y
-
a
u
t
o
 
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
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
l
o
g
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
 
?
 
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
"
t
e
x
t
-
g
r
a
y
-
5
0
0
 
i
t
a
l
i
c
"
>
N
o
 
o
u
t
p
u
t
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
.
l
o
g
s
.
m
a
p
(
(
l
o
g
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
{
`
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
w
r
a
p
 
$
{
L
O
G
_
C
O
L
O
R
S
[
l
o
g
.
t
y
p
e
]
 
?
?
 
"
t
e
x
t
-
g
r
a
y
-
1
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
a
r
g
s
.
j
o
i
n
(
"
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
}




 
 
 
 
 
 
{
/
*
 
E
x
p
e
c
t
e
d
 
o
u
t
p
u
t
 
*
/
}


 
 
 
 
 
 
{
e
x
p
e
c
t
e
d
O
u
t
p
u
t
 
&
&
 
i
s
C
o
r
r
e
c
t
 
=
=
=
 
f
a
l
s
e
 
&
&
 
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
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
g
-
g
r
a
y
-
9
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
s
e
m
i
b
o
l
d
 
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
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
b
l
o
c
k
 
m
b
-
1
"
>
E
x
p
e
c
t
e
d
 
O
u
t
p
u
t
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
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
w
r
a
p
 
f
o
n
t
-
m
o
n
o
"
>
{
e
x
p
e
c
t
e
d
O
u
t
p
u
t
}
<
/
p
r
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


 
 
)
;


}


