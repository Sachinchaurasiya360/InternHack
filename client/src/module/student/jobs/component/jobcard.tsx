
i
m
p
o
r
t
 
R
e
a
c
t
 
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
 
L
i
n
k
 
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




c
o
n
s
t
 
c
a
r
d
B
a
s
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
 
p
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
w
h
i
t
e
/
3
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
 
h
-
f
u
l
l
 
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
;




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
m
p
a
n
y
M
a
r
k
(
{
 
l
a
b
e
l
 
}
:
 
{
 
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
1
0
 
h
-
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
 
s
h
r
i
n
k
-
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
"
>


 
 
 
 
 
 
{
l
a
b
e
l
?
.
c
h
a
r
A
t
(
0
)
?
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
 
|
|
 
"
?
"
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
o
b
C
a
r
d
P
r
o
p
s
 
{


 
 
/
*
*
 
I
n
t
e
r
n
a
l
 
r
o
u
t
e
 
(
u
s
e
 
`
t
o
`
)
 
o
r
 
e
x
t
e
r
n
a
l
 
U
R
L
 
(
u
s
e
 
`
h
r
e
f
`
)
 
*
/


 
 
t
o
?
:
 
s
t
r
i
n
g
;


 
 
h
r
e
f
?
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
m
p
a
n
y
:
 
s
t
r
i
n
g
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


 
 
b
a
d
g
e
?
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
 
 
 
 
 
 
 
/
/
 
e
.
g
.
 
"
e
x
t
e
r
n
a
l
"
 
/
 
s
o
u
r
c
e
 
l
a
b
e
l


 
 
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
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
m
e
t
a
C
h
i
p
s
?
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
 
 
 
/
/
 
l
o
c
a
t
i
o
n
,
 
s
a
l
a
r
y
,
 
d
e
a
d
l
i
n
e
 
c
h
i
p
s


 
 
t
a
g
s
?
:
 
s
t
r
i
n
g
[
]
;


 
 
r
i
g
h
t
M
e
t
a
?
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
 
 
 
/
/
 
e
.
g
.
 
"
1
2
 
a
p
p
l
i
e
d
"
 
c
o
u
n
t


 
 
f
o
o
t
e
r
M
e
t
a
?
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
 
 
/
/
 
e
.
g
.
 
d
e
a
d
l
i
n
e
 
p
i
l
l
 
(
l
e
f
t
 
s
i
d
e
 
o
f
 
f
o
o
t
e
r
)


 
 
c
t
a
?
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
 
 
 
 
 
 
 
 
 
/
/
 
o
v
e
r
r
i
d
e
s
 
d
e
f
a
u
l
t
 
"
v
i
e
w
 
r
o
l
e
"
 
t
e
x
t


}




c
o
n
s
t
 
J
o
b
C
a
r
d
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
J
o
b
C
a
r
d
(
{


 
 
t
o
,


 
 
h
r
e
f
,


 
 
c
o
m
p
a
n
y
,


 
 
t
i
t
l
e
,


 
 
b
a
d
g
e
,


 
 
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
,


 
 
m
e
t
a
C
h
i
p
s
,


 
 
t
a
g
s
,


 
 
r
i
g
h
t
M
e
t
a
,


 
 
f
o
o
t
e
r
M
e
t
a
,


 
 
c
t
a
,


}
:
 
J
o
b
C
a
r
d
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
 
i
n
n
e
r
 
=
 
(


 
 
 
 
<
>


 
 
 
 
 
 
{
/
*
 
B
a
d
g
e
 
(
t
o
p
-
r
i
g
h
t
)
 
*
/
}


 
 
 
 
 
 
{
b
a
d
g
e
 
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
4
 
r
i
g
h
t
-
4
 
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
 
w
-
1
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
r
o
w
 
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
 
m
b
-
3
 
$
{
b
a
d
g
e
 
?
 
"
p
r
-
1
6
"
 
:
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
<
C
o
m
p
a
n
y
M
a
r
k
 
l
a
b
e
l
=
{
c
o
m
p
a
n
y
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
i
n
e
-
c
l
a
m
p
-
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
t
-
0
.
5
 
b
l
o
c
k
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
a
n
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


 
 
 
 
 
 
 
 
{
r
i
g
h
t
M
e
t
a
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
r
i
g
h
t
M
e
t
a
}


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
D
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
 
*
/
}


 
 
 
 
 
 
{
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
 
&
&
 
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
i
n
e
-
c
l
a
m
p
-
2
 
m
b
-
4
 
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
}


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
M
e
t
a
 
c
h
i
p
s
 
(
l
o
c
a
t
i
o
n
,
 
s
a
l
a
r
y
,
 
d
e
a
d
l
i
n
e
)
 
*
/
}


 
 
 
 
 
 
{
m
e
t
a
C
h
i
p
s
 
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
1
.
5
 
m
b
-
4
"
>
{
m
e
t
a
C
h
i
p
s
}
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
 
T
a
g
s
 
*
/
}


 
 
 
 
 
 
{
t
a
g
s
 
&
&
 
t
a
g
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
w
r
a
p
 
g
a
p
-
1
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
t
a
g
s
.
s
l
i
c
e
(
0
,
 
3
)
.
m
a
p
(
(
t
a
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
a
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
2
 
p
y
-
0
.
5
 
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
r
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
}




 
 
 
 
 
 
{
/
*
 
F
o
o
t
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
m
t
-
a
u
t
o
 
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
t
-
3
 
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
5
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
"
>


 
 
 
 
 
 
 
 
 
 
{
f
o
o
t
e
r
M
e
t
a
 
?
?
 
"
v
i
e
w
 
r
o
l
e
"
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
c
t
a
 
?
?
 
(


 
 
 
 
 
 
 
 
 
 
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
4
 
h
-
4
 
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
a
l
l
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
>


 
 
)
;




 
 
i
f
 
(
h
r
e
f
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
a
 
h
r
e
f
=
{
h
r
e
f
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
c
a
r
d
B
a
s
e
}
>


 
 
 
 
 
 
 
 
{
i
n
n
e
r
}


 
 
 
 
 
 
<
/
a
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
L
i
n
k
 
t
o
=
{
t
o
 
?
?
 
"
#
"
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
c
a
r
d
B
a
s
e
}
>


 
 
 
 
 
 
{
i
n
n
e
r
}


 
 
 
 
<
/
L
i
n
k
>


 
 
)
;


}
)
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
 
J
o
b
C
a
r
d
;
