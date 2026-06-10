
/
*
 
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
 
r
e
a
c
t
-
r
e
f
r
e
s
h
/
o
n
l
y
-
e
x
p
o
r
t
-
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
 
*
/


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




e
x
p
o
r
t
 
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
c
o
r
e
T
i
e
r
 
{


 
 
m
i
n
:
 
n
u
m
b
e
r
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
;


 
 
s
t
r
o
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


 
 
b
a
r
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
c
o
n
s
t
 
S
C
O
R
E
_
T
I
E
R
S
:
 
S
c
o
r
e
T
i
e
r
[
]
 
=
 
[


 
 
{


 
 
 
 
m
i
n
:
 
7
0
,


 
 
 
 
l
a
b
e
l
:
 
"
E
x
c
e
l
l
e
n
t
"
,


 
 
 
 
s
t
r
o
k
e
:
 
"
#
a
3
e
6
3
5
"
,
 
/
/
 
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
,


 
 
 
 
b
a
r
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


 
 
}
,


 
 
{


 
 
 
 
m
i
n
:
 
4
0
,


 
 
 
 
l
a
b
e
l
:
 
"
N
e
e
d
s
 
W
o
r
k
"
,


 
 
 
 
s
t
r
o
k
e
:
 
"
#
e
a
b
3
0
8
"
,


 
 
 
 
t
e
x
t
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
,


 
 
 
 
b
a
r
:
 
"
b
g
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
,


 
 
}
,


 
 
{


 
 
 
 
m
i
n
:
 
0
,


 
 
 
 
l
a
b
e
l
:
 
"
P
o
o
r
"
,


 
 
 
 
s
t
r
o
k
e
:
 
"
#
e
f
4
4
4
4
"
,


 
 
 
 
t
e
x
t
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
"
,


 
 
 
 
b
a
r
:
 
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
0
"
,


 
 
}
,


]
;




e
x
p
o
r
t
 
c
o
n
s
t
 
g
e
t
S
c
o
r
e
T
i
e
r
 
=
 
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
:
 
S
c
o
r
e
T
i
e
r
 
=
>


 
 
S
C
O
R
E
_
T
I
E
R
S
.
f
i
n
d
(
(
t
)
 
=
>
 
s
c
o
r
e
 
>
=
 
t
.
m
i
n
)
 
?
?
 
S
C
O
R
E
_
T
I
E
R
S
[
S
C
O
R
E
_
T
I
E
R
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
]
!
;




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
 
S
c
o
r
e
C
i
r
c
l
e
(
{


 
 
s
c
o
r
e
,


 
 
s
i
z
e
 
=
 
"
l
g
"
,


}
:
 
{


 
 
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
;


 
 
s
i
z
e
?
:
 
"
l
g
"
 
|
 
"
s
m
"
;


}
)
 
{


 
 
c
o
n
s
t
 
i
s
L
g
 
=
 
s
i
z
e
 
=
=
=
 
"
l
g
"
;


 
 
c
o
n
s
t
 
r
a
d
i
u
s
 
=
 
i
s
L
g
 
?
 
6
2
 
:
 
3
6
;


 
 
c
o
n
s
t
 
v
i
e
w
B
o
x
 
=
 
i
s
L
g
 
?
 
"
0
 
0
 
1
6
0
 
1
6
0
"
 
:
 
"
0
 
0
 
8
8
 
8
8
"
;


 
 
c
o
n
s
t
 
c
x
 
=
 
i
s
L
g
 
?
 
8
0
 
:
 
4
4
;


 
 
c
o
n
s
t
 
s
w
 
=
 
i
s
L
g
 
?
 
1
0
 
:
 
6
;


 
 
c
o
n
s
t
 
c
i
r
c
u
m
f
e
r
e
n
c
e
 
=
 
2
 
*
 
M
a
t
h
.
P
I
 
*
 
r
a
d
i
u
s
;


 
 
c
o
n
s
t
 
o
f
f
s
e
t
 
=
 
c
i
r
c
u
m
f
e
r
e
n
c
e
 
-
 
(
s
c
o
r
e
 
/
 
1
0
0
)
 
*
 
c
i
r
c
u
m
f
e
r
e
n
c
e
;




 
 
c
o
n
s
t
 
t
i
e
r
 
=
 
g
e
t
S
c
o
r
e
T
i
e
r
(
s
c
o
r
e
)
;


 
 
c
o
n
s
t
 
{
 
s
t
r
o
k
e
:
 
s
t
r
o
k
e
C
o
l
o
r
,
 
t
e
x
t
:
 
t
e
x
t
C
o
l
o
r
 
}
 
=
 
t
i
e
r
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
i
s
L
g
 
?
 
"
r
e
l
a
t
i
v
e
 
w
-
4
0
 
h
-
4
0
"
 
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
 
w
-
2
0
 
h
-
2
0
"
}
>


 
 
 
 
 
 
 
 
<
s
v
g
 
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
f
u
l
l
 
h
-
f
u
l
l
 
-
r
o
t
a
t
e
-
9
0
"
 
v
i
e
w
B
o
x
=
{
v
i
e
w
B
o
x
}
>


 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
c
x
}


 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
c
x
}


 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
r
a
d
i
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
e
7
e
5
e
4
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
w
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
d
a
r
k
:
s
t
r
o
k
e
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


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
c
x
}


 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
c
x
}


 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
r
a
d
i
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
r
o
k
e
C
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
w
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
L
i
n
e
c
a
p
=
"
r
o
u
n
d
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
c
i
r
c
u
m
f
e
r
e
n
c
e
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
 
s
t
r
o
k
e
D
a
s
h
o
f
f
s
e
t
:
 
c
i
r
c
u
m
f
e
r
e
n
c
e
 
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
 
s
t
r
o
k
e
D
a
s
h
o
f
f
s
e
t
:
 
o
f
f
s
e
t
 
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
 
1
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
O
u
t
"
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


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
s
v
g
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
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
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
 
s
c
a
l
e
:
 
1
 
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
e
l
a
y
:
 
0
.
6
,
 
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
0
0
 
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
$
{
i
s
L
g
 
?
 
"
t
e
x
t
-
5
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
x
l
"
}
 
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
 
$
{
t
e
x
t
C
o
l
o
r
}
 
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
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
c
o
r
e
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
i
s
L
g
 
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
s
t
o
n
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
t
-
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
1
0
0


 
 
 
 
 
 
 
 
 
 
 
 
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


