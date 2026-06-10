
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
R
e
f
 
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


 
 
C
l
o
c
k
,


 
 
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
,


 
 
X
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
 
t
y
p
e
 
{
 
A
s
s
e
s
s
m
e
n
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
t
y
p
e
s
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
 
A
s
s
e
s
s
m
e
n
t
T
e
s
t
V
i
e
w
P
r
o
p
s
 
{


 
 
q
u
e
s
t
i
o
n
s
:
 
A
s
s
e
s
s
m
e
n
t
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
;


 
 
t
i
m
e
L
i
m
i
t
S
e
c
s
?
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
o
n
S
u
b
m
i
t
:
 
(
a
n
s
w
e
r
s
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
 
n
u
m
b
e
r
>
)
 
=
>
 
v
o
i
d
;


 
 
s
u
b
m
i
t
t
i
n
g
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




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
A
s
s
e
s
s
m
e
n
t
T
e
s
t
V
i
e
w
(
{


 
 
q
u
e
s
t
i
o
n
s
,


 
 
t
i
m
e
L
i
m
i
t
S
e
c
s
,


 
 
o
n
S
u
b
m
i
t
,


 
 
s
u
b
m
i
t
t
i
n
g
,


}
:
 
A
s
s
e
s
s
m
e
n
t
T
e
s
t
V
i
e
w
P
r
o
p
s
)
 
{


 
 
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
a
n
s
w
e
r
s
,
 
s
e
t
A
n
s
w
e
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
 
n
u
m
b
e
r
>
>
(
{
}
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
C
o
n
f
i
r
m
,
 
s
e
t
S
h
o
w
C
o
n
f
i
r
m
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
s
e
c
o
n
d
s
L
e
f
t
,
 
s
e
t
S
e
c
o
n
d
s
L
e
f
t
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
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(


 
 
 
 
t
i
m
e
L
i
m
i
t
S
e
c
s
 
?
?
 
n
u
l
l


 
 
)
;


 
 
c
o
n
s
t
 
a
u
t
o
S
u
b
m
i
t
t
e
d
R
e
f
 
=
 
u
s
e
R
e
f
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
 
a
n
s
w
e
r
e
d
C
o
u
n
t
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
a
n
s
w
e
r
s
)
.
l
e
n
g
t
h
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
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
i
s
L
a
s
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
 
=
=
=
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
-
 
1
;




 
 
/
/
 
B
u
i
l
d
 
t
h
e
 
f
i
n
a
l
 
a
n
s
w
e
r
s
 
p
a
y
l
o
a
d
 
a
n
d
 
c
a
l
l
 
o
n
S
u
b
m
i
t


 
 
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
S
u
b
m
i
t
 
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
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
a
u
t
o
S
u
b
m
i
t
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
a
u
t
o
S
u
b
m
i
t
t
e
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;


 
 
 
 
o
n
S
u
b
m
i
t
(
a
n
s
w
e
r
s
)
;


 
 
}
,
 
[
a
n
s
w
e
r
s
,
 
o
n
S
u
b
m
i
t
]
)
;




 
 
/
/
 
C
o
u
n
t
d
o
w
n
 
t
i
m
e
r


 
 
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
s
e
c
o
n
d
s
L
e
f
t
 
=
=
=
 
n
u
l
l
 
|
|
 
s
e
c
o
n
d
s
L
e
f
t
 
<
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


 
 
c
o
n
s
t
 
i
n
t
e
r
v
a
l
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
c
o
n
d
s
L
e
f
t
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
p
r
e
v
 
=
=
=
 
n
u
l
l
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
i
f
 
(
p
r
e
v
 
<
=
 
1
)
 
{


 
 
 
 
 
 
 
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
i
n
t
e
r
v
a
l
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
0
;


 
 
 
 
 
 
}


 
 
 
 
 
 
r
e
t
u
r
n
 
p
r
e
v
 
-
 
1
;


 
 
 
 
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
I
n
t
e
r
v
a
l
(
i
n
t
e
r
v
a
l
)
;


 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


}
,
 
[
]
)
;
 
/
/
 
r
u
n
s
 
o
n
c
e
 
o
n
 
m
o
u
n
t
;
 
f
u
n
c
t
i
o
n
a
l
 
u
p
d
a
t
e
 
i
n
s
i
d
e
 
s
e
t
I
n
t
e
r
v
a
l
 
h
a
n
d
l
e
s
 
s
e
c
o
n
d
s
L
e
f
t




 
 
/
/
 
A
u
t
o
-
s
u
b
m
i
t
 
w
h
e
n
 
t
i
m
e
r
 
h
i
t
s
 
0


 
 
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
s
e
c
o
n
d
s
L
e
f
t
 
=
=
=
 
0
 
&
&
 
!
a
u
t
o
S
u
b
m
i
t
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
;


 
 
 
 
}


 
 
}
,
 
[
s
e
c
o
n
d
s
L
e
f
t
,
 
h
a
n
d
l
e
S
u
b
m
i
t
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
l
e
c
t
A
n
s
w
e
r
 
=
 
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
n
d
e
x
:
 
n
u
m
b
e
r
,
 
o
p
t
i
o
n
I
n
d
e
x
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
 
{


 
 
 
 
s
e
t
A
n
s
w
e
r
s
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
S
t
r
i
n
g
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
n
d
e
x
)
]
:
 
o
p
t
i
o
n
I
n
d
e
x
 
}
)
)
;


 
 
}
;




 
 
c
o
n
s
t
 
g
o
T
o
 
=
 
(
i
n
d
e
x
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
 
{


 
 
 
 
i
f
 
(
i
n
d
e
x
 
>
=
 
0
 
&
&
 
i
n
d
e
x
 
<
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
)
 
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
i
n
d
e
x
)
;


 
 
}
;




 
 
c
o
n
s
t
 
f
o
r
m
a
t
T
i
m
e
 
=
 
(
s
e
c
s
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
m
 
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
s
e
c
s
 
/
 
6
0
)
;


 
 
 
 
c
o
n
s
t
 
s
 
=
 
s
e
c
s
 
%
 
6
0
;


 
 
 
 
r
e
t
u
r
n
 
`
$
{
S
t
r
i
n
g
(
m
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
:
$
{
S
t
r
i
n
g
(
s
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
`
;


 
 
}
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
Q
u
e
s
t
i
o
n
 
=
 
q
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
]
;


 
 
i
f
 
(
!
c
u
r
r
e
n
t
Q
u
e
s
t
i
o
n
)
 
r
e
t
u
r
n
 
n
u
l
l
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
l
g
:
f
l
e
x
-
r
o
w
 
g
a
p
-
6
 
m
i
n
-
h
-
0
"
>


 
 
 
 
 
 
{
/
*
 
S
i
d
e
b
a
r
:
 
n
a
v
i
g
a
t
i
o
n
 
+
 
t
i
m
e
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
l
g
:
w
-
6
4
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
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
/
*
 
T
i
m
e
r
 
*
/
}


 
 
 
 
 
 
 
 
{
s
e
c
o
n
d
s
L
e
f
t
 
!
=
=
 
n
u
l
l
 
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
{
`
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
3
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
c
o
n
d
s
L
e
f
t
 
<
=
 
6
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
5
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
e
c
o
n
d
s
L
e
f
t
 
<
=
 
3
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
a
m
b
e
r
-
9
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
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
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
f
o
r
m
a
t
T
i
m
e
(
s
e
c
o
n
d
s
L
e
f
t
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
o
n
d
s
L
e
f
t
 
<
=
 
6
0
 
&
&
 
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
x
s
 
f
o
n
t
-
n
o
r
m
a
l
 
m
l
-
a
u
t
o
"
>
H
u
r
r
y
!
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
g
r
e
s
s
 
s
u
m
m
a
r
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
3
 
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
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
2
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
n
s
w
e
r
e
d
C
o
u
n
t
}
 
/
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
}
 
a
n
s
w
e
r
e
d


 
 
 
 
 
 
 
 
 
 
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
2
 
h
-
1
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
2
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
f
u
l
l
 
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
h
-
f
u
l
l
 
b
g
-
i
n
d
i
g
o
-
6
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
i
n
d
i
g
o
-
5
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
f
u
l
l
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
>
 
0
 
?
 
(
a
n
s
w
e
r
e
d
C
o
u
n
t
 
/
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
)
 
*
 
1
0
0
 
:
 
0
}
%
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
n
a
v
i
g
a
t
i
o
n
 
g
r
i
d
 
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
3
 
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
g
r
a
y
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


 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
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
5
 
g
a
p
-
1
.
5
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
s
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
n
s
w
e
r
e
d
 
=
 
a
n
s
w
e
r
s
[
S
t
r
i
n
g
(
i
d
x
)
]
 
!
=
=
 
u
n
d
e
f
i
n
e
d
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
u
r
r
e
n
t
 
=
 
i
d
x
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
b
t
n
C
l
a
s
s
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
 
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
e
d
i
u
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
c
o
l
o
r
s
 
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
c
e
n
t
e
r
 
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
t
n
C
l
a
s
s
 
+
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
b
g
-
i
n
d
i
g
o
-
6
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
i
n
d
i
g
o
-
5
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
i
s
A
n
s
w
e
r
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
t
n
C
l
a
s
s
 
+
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
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
b
g
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
3
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
t
n
C
l
a
s
s
 
+
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
2
0
0
 
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
6
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
g
r
a
y
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
a
y
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
g
-
g
r
a
y
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
g
-
g
r
a
y
-
6
0
0
"
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
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
o
T
o
(
i
d
x
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
b
t
n
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
x
 
+
 
1
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
 
L
e
g
e
n
d
 
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
 
g
a
p
-
3
 
m
t
-
3
 
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
w
-
2
.
5
 
h
-
2
.
5
 
r
o
u
n
d
e
d
 
b
g
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
g
-
g
r
a
y
-
7
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
n
a
n
s
w
e
r
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
w
-
2
.
5
 
h
-
2
.
5
 
r
o
u
n
d
e
d
 
b
g
-
g
r
e
e
n
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
g
r
e
e
n
-
9
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
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
w
-
2
.
5
 
h
-
2
.
5
 
r
o
u
n
d
e
d
 
b
g
-
i
n
d
i
g
o
-
6
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
i
n
d
i
g
o
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
u
r
r
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
a
i
n
 
c
o
n
t
e
n
t
:
 
c
u
r
r
e
n
t
 
q
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
-
1
 
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
 
p
-
6
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
s
t
a
r
t
 
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
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
 
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
 
o
f
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
b
a
s
e
 
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
g
r
a
y
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
g
r
a
y
-
1
0
0
 
m
t
-
1
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
Q
u
e
s
t
i
o
n
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
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
x
s
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
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
a
y
-
4
0
0
 
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
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
m
l
-
4
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
Q
u
e
s
t
i
o
n
.
p
o
i
n
t
s
}
 
p
t
{
c
u
r
r
e
n
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
p
o
i
n
t
s
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
O
p
t
i
o
n
 
c
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
u
r
r
e
n
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
o
p
t
i
o
n
s
.
m
a
p
(
(
o
p
t
i
o
n
,
 
o
p
t
I
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
e
l
e
c
t
e
d
 
=
 
a
n
s
w
e
r
s
[
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
)
]
 
=
=
=
 
o
p
t
I
d
x
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
o
p
t
I
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
c
t
A
n
s
w
e
r
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
,
 
o
p
t
I
d
x
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
w
-
f
u
l
l
 
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
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
l
g
 
b
o
r
d
e
r
-
2
 
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
 
t
e
x
t
-
s
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
i
n
d
i
g
o
-
5
0
0
 
b
g
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
9
5
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
i
n
d
i
g
o
-
4
0
0
 
t
e
x
t
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
1
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
g
r
a
y
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
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
-
s
h
r
i
n
k
-
0
 
w
-
6
 
h
-
6
 
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
-
2
 
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
x
s
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
i
n
d
i
g
o
-
5
0
0
 
b
g
-
i
n
d
i
g
o
-
5
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
o
r
d
e
r
-
i
n
d
i
g
o
-
4
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
i
n
d
i
g
o
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
a
y
-
6
0
0
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
.
f
r
o
m
C
h
a
r
C
o
d
e
(
6
5
 
+
 
o
p
t
I
d
x
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
s
p
a
n
>
{
o
p
t
i
o
n
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
e
l
e
c
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
l
-
a
u
t
o
 
t
e
x
t
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
4
0
0
 
f
l
e
x
-
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
 
N
a
v
i
g
a
t
i
o
n
 
b
u
t
t
o
n
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
 
m
t
-
6
 
p
t
-
4
 
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
"
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
(
)
 
=
>
 
g
o
T
o
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
 
-
 
1
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
=
=
 
0
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
a
y
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
a
y
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
b
l
a
c
k
 
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
w
h
i
t
e
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
o
u
s


 
 
 
 
 
 
 
 
 
 
 
 
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
a
s
t
Q
u
e
s
t
i
o
n
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
h
o
w
C
o
n
f
i
r
m
(
t
r
u
e
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
s
u
b
m
i
t
t
i
n
g
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
p
x
-
5
 
p
y
-
2
 
b
g
-
b
l
a
c
k
 
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
9
5
0
 
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
s
e
m
i
b
o
l
d
 
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
 
h
o
v
e
r
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
g
r
a
y
-
2
0
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
o
p
a
c
i
t
y
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
t
i
n
g
 
?
 
"
S
u
b
m
i
t
t
i
n
g
.
.
.
"
 
:
 
"
S
u
b
m
i
t
 
A
s
s
e
s
s
m
e
n
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
o
T
o
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
 
b
g
-
b
l
a
c
k
 
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
9
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
 
h
o
v
e
r
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
g
r
a
y
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
<
/
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
f
i
r
m
a
t
i
o
n
 
m
o
d
a
l
 
*
/
}


 
 
 
 
 
 
{
s
h
o
w
C
o
n
f
i
r
m
 
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
f
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
5
0
 
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
c
e
n
t
e
r
 
b
g
-
b
l
a
c
k
/
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
g
r
a
y
-
9
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
x
l
 
s
h
a
d
o
w
-
x
l
 
m
a
x
-
w
-
m
d
 
w
-
f
u
l
l
 
m
x
-
4
 
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
2
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
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
5
 
h
-
5
 
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
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
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
g
r
a
y
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
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
u
b
m
i
t
 
A
s
s
e
s
s
m
e
n
t
?


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
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
1
 
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
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
 
h
a
v
e
 
a
n
s
w
e
r
e
d
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
n
s
w
e
r
e
d
C
o
u
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
 
o
f
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
}
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
n
s
w
e
r
e
d
C
o
u
n
t
 
<
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
-
 
a
n
s
w
e
r
e
d
C
o
u
n
t
}
 
q
u
e
s
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
-
 
a
n
s
w
e
r
e
d
C
o
u
n
t
 
>
 
1
 
?
 
"
s
"
 
:
 
"
"
}
 
w
i
l
l
 
b
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
 
u
n
a
n
s
w
e
r
e
d
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
a
c
t
i
o
n
 
c
a
n
n
o
t
 
b
e
 
u
n
d
o
n
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
h
o
w
C
o
n
f
i
r
m
(
f
a
l
s
e
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
p
-
1
 
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
g
r
a
y
-
6
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
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
m
t
-
5
 
j
u
s
t
i
f
y
-
e
n
d
"
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
(
)
 
=
>
 
s
e
t
S
h
o
w
C
o
n
f
i
r
m
(
f
a
l
s
e
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
a
y
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
b
l
a
c
k
 
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
w
h
i
t
e
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
i
e
w
 
A
n
s
w
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
C
o
n
f
i
r
m
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
s
u
b
m
i
t
t
i
n
g
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
p
x
-
5
 
p
y
-
2
 
b
g
-
b
l
a
c
k
 
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
9
5
0
 
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
s
e
m
i
b
o
l
d
 
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
 
h
o
v
e
r
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
g
r
a
y
-
2
0
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
o
p
a
c
i
t
y
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
t
i
n
g
 
?
 
"
S
u
b
m
i
t
t
i
n
g
.
.
.
"
 
:
 
"
C
o
n
f
i
r
m
 
S
u
b
m
i
t
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


